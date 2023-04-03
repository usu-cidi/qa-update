from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
import dotenv
from talkToBox import getDataFromBox
from combineData import combineReports
from updateMonday import fillNewBoard, updateExistingBoard
from getAllyData import getURL
from boxsdk import Client, OAuth2
import os
from threading import Thread
import threading
import json
import pandas as pd
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime


app = Flask(__name__)
status = "inactive"
link = "inactive"
app.config['SECRET_KEY'] = os.environ.get('CSRF')
allyDataframe = None
accessTok = None
refreshTok = None
csrf = None


def doUpdate(triggerType, boardId, crBoxId):
    global status
    status = 0

    print(f"doing the update {status}")

    allyData = allyDataframe
    status += 1

    try:
        courseReportData = getDataFromBox(crBoxId, 'excel', accessTok)
        print(f"gotten course report {status}")
        status += 1
    except Exception as e:
        print(e)
        status = "error1"
        return

    try:
        completeReport = combineReports(courseReportData, allyData)
        print(f"combined reports {status}")
        status += 1
    except Exception as e:
        print(e)
        status = "error2"
        return

    try:
        if triggerType == "Fill whole board":
            fillNewBoard(completeReport, boardId)
            print(f"Fill in complete {status}")
            status += 7

        updateExistingBoard(completeReport, boardId)
        print(f"Update complete: {status}")
        status += 7
    except Exception as e:
        print(e)
        status = "error3"


@app.route('/', methods=['GET', 'POST'])
def loginBox():
    msg = request.args.get('msg')

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url('http://localhost:8000/oauth/callback')
    global csrf
    csrf = csrf_token
    return render_template('loginBox.html', auth_url=auth_url, csrf_token=csrf_token, msg=msg)


def store_tokens(access_token: str, refresh_token: str) -> bool:
    """
    Store the access and refresh tokens for the current user
    """

    global accessTok
    accessTok = access_token
    global refreshTok
    refreshTok = refresh_token

    print(f"Here is the access token!! {accessTok}")

    return True


@app.route('/oauth/callback')
def oauth_callback():
    code = request.args.get('code')
    state = request.args.get('state')
    error = request.args.get('error')
    error_description = request.args.get('error_description')

    try:
        assert state == csrf
    except AssertionError as e:
        print(e)
        msg = "CSRF verification failed."
        return redirect(url_for('loginBox', msg=msg))

    if error == 'access_denied':
        print("denial caught!")
        msg = 'You denied access to your Box account. You must authorize QA Update to access your account to use this application.'
    else:
        msg = error_description

    if msg is not None:
        print("rendering login page again")
        #return render_template('loginBox.html', msg=msg)
        return redirect(url_for('loginBox', msg=msg))

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens
    )

    access_token, refresh_token = oauth.authenticate(code)

    return redirect(url_for('landing'))


@app.route('/landing', methods=['GET', 'POST'])
def landing():
    # GET
    if request.method == 'GET':
        return render_template('index.html')

    if request.method == 'POST':
        return redirect(url_for('landing'))

    return render_template('index.html')

@app.route('/submitted', methods=['GET'])
def submitted():
    return render_template('submitted.html')


@app.route('/bug-report', methods=['GET', 'POST'])
def bugReport():
    # GET
    if request.method == 'GET':
        return render_template('bugReport.html')

    if request.method == 'POST':
        reportInfo = {
            "App Name": request.form["app-name"],
            "Date and time": request.form["date-time"],
            "Expected Behavior": request.form["expected-behavior"],
            "Actual Behavior": request.form["actual-behavior"],
            "Errors": request.form["errors"],
            "Browser": request.form["browser"],
            "Other Info": request.form["other-info"],
            "Name": request.form["name"],
            "Email": request.form["email"],
        }

        message = f"Bug reported for {request.form['app-name']} submitted on {datetime.now()}" \
                  f"\n\n------Form Info------\n"

        for info in reportInfo:
            message += f"{info}: {reportInfo[info]}\n"

        message += "\n------Runtime Info------\n"

        message += f"status: {status}\n"
        message += f"link: {link}\n"
        message += f"status: {status}\n"
        message += f"allyDataframe: {allyDataframe}\n"
        message += f"accessTok: {accessTok}\n"
        message += f"refreshTok: {refreshTok}\n"
        message += f"csrf: {csrf}\n"

        sendEmail(message, f"Bug Report - {request.form['app-name']}")
        return redirect(url_for('submitted'))

    return render_template('bugReport.html')


def sendEmail(message, subject):
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = os.environ.get('DEV_EMAIL')
    receiver_email = os.environ.get('DEV_EMAIL')
    password = os.environ.get('EMAIL_PASS')

    msg = EmailMessage()
    msg.set_content(message)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = receiver_email

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.send_message(msg, from_addr=sender_email, to_addrs=receiver_email)


def getAllyURL():
    result = getURL()
    global link
    if result == -1:
        link = -1
    else:
        link = f"http{result[5:-1]}"


@app.route('/getAllyLink', methods=['POST'])
def getAllyLink():

    if request.method == 'POST':
        global link
        link = ""

        t2 = Thread(target=getAllyURL)
        print("Starting the thread")
        t2.start()

        return render_template('index.html', status=f"Loading....")

    return render_template('index.html')


@app.route('/processAllyFile', methods=['POST'])
def processAllyFile():

    if request.method == 'POST':

        try:
            uploadedFile = request.files["allyFile"]
            global allyDataframe
            allyDataframe = pd.read_csv(uploadedFile)

            return render_template('index.html', upload_status="Upload successful!")
        except Exception as e:
            uploadErr = "File is invalid or failed to upload. Please try again."
            print(e)
            return render_template('index.html', upload_err=uploadErr)

    return render_template('index.html')


@app.route('/updating', methods=['GET', 'POST'])
def updating():
    global t1

    # GET
    if request.method == 'GET':
        return render_template('updating.html')

    if request.method == 'POST':
        triggerType = request.form['trigger-type']
        boardId = request.form['board-id']
        crBoxId = request.form['cr-box-id']

        if allyDataframe is None:
            print("No ally file")
            flash("You must upload a valid Ally file to continue.")

        print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

        error = False

        if triggerType == "" or not boardId or not crBoxId:
            flash('All fields are required!')
            error = True
        else:
            if triggerType != "update" and triggerType != "new":
                flash('Invalid update type (stop messing with my dev tools!)')
                error = True
            if not boardId.isdigit() or int(boardId) <= 0:
                flash('Invalid monday board ID')
                error = True
            if not crBoxId.isdigit() or int(crBoxId) <= 0:
                flash('Invalid course report ID')
                error = True
        if error:
            return render_template('index.html')

        print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

        if accessTok is None:
            flash('Box authorization incomplete.')
            return render_template('index.html')

        t1 = Thread(target=doUpdate, args=(triggerType,),
                    kwargs={'boardId': boardId, 'crBoxId': crBoxId})
        t1.start()

        return redirect(url_for('updating'))


    return render_template('index.html')


@app.route('/status', methods=['GET'])
def getStatus():
    statusList = {'status': status}
    return json.dumps(statusList)

@app.route('/linkStatus', methods=['GET'])
def getLinkStatus():
    statusList = {'status': link}
    return json.dumps(statusList)


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")
    dotenv.load_dotenv(dotenv.find_dotenv())
