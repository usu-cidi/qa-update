from flask import Flask, request, jsonify, render_template, flash, redirect, url_for, session
from flask_cors import CORS
import dotenv    # for dev
from boxsdk import Client, OAuth2
import os
from threading import Thread
import json
import pandas as pd
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime

from talkToBox import getDataFromBox
from combineData import combineReports
from updateMonday import fillNewBoard, updateExistingBoard
from getAllyData import getURL


app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = os.environ.get('CSRF')

link = "inactive"
status = "inactive"
allyDataFrame = None

COOKIE = "crunch"
FRONT_URL = "http://localhost:8000"


def checkAuth(cookie):
    print(f"Is {cookie} equal to {COOKIE}???")
    if cookie == COOKIE:
        return True
    else:
        return False


def noAuthResponse():
    response = jsonify({'error': 'not authenticated'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


def prepResponse(data):
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/', methods=['GET'])
def initialLogin():
    submittedCode = request.args.get("code")

    if request.args.get("check") != "":
        print("Caught a bot!! Get out of here!")
        response = jsonify({'cookie': 'pshhh you thought :/'})
        response.headers.add('Access-Control-Allow-Origin', FRONT_URL)
        return response, 401

    authorizedUsers = json.loads(os.environ.get("AUTH_USERS"))
    if submittedCode in authorizedUsers:
        print(f"{authorizedUsers[submittedCode]} is trying to access the site with approved code {submittedCode}")
        return prepResponse({'cookie': COOKIE}), 200

    return prepResponse({'cookie': 'pshhh you thought :/'}), 401

#--------------------------


@app.route('/box-login', methods=['GET', 'POST'])
def loginBox():
    #TODO
    pass

#--------------------------


@app.route('/get-ally-link', methods=['POST'])
def getAllyLink():
    #if not checkAuth(request.cookies.get("Token")):
        #return noAuthResponse(), 401

    requestInfo = json.loads(request.data)
    print(requestInfo)

    #if not requestInfo["check"] == "":
    #    print("Caught a bot!! Get out of here!")
    #    response = jsonify({'message': 'suspicious access attempt'})
    #    return response, 401

    allyClientId = requestInfo["clientId"]
    allyConsumKey = requestInfo["consumKey"]
    allyConsumSec = requestInfo["consumSec"]
    termCode = requestInfo["termCode"]

    if not allyClientId or not allyConsumKey or not allyConsumSec or not termCode:
        return prepResponse({"error": "invalid input"}), 400

    url = getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if url == -1:
        print("Getting ally url failed")
        return prepResponse({"error": "getting ally link failed"}), 500

    response = prepResponse({"link": url})
    #response.headers.add('Access-Control-Allow-Origin', '*')
    print(response)
    return response, 200


def getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode):
    result = getURL(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if result == -1:
        return -1
    else:
        return f"http{result[5:-1]}"


@app.route('/process-ally-file', methods=['POST'])
def processAllyFile():
    #if not checkAuth(request.cookies.get("Token")):
        #return noAuthResponse(), 401

    #print(request.files["file"])
    #requestInfo = json.loads(request.files)
    print(request.files)
    print(request.form)
    #print(request.files["file"])
    return prepResponse({"message": "File cannot be read :(("}), 200

    print(requestInfo)

    #if not requestInfo["check"] == "":
    #    print("Caught a bot!! Get out of here!")
    #    response = jsonify({'message': 'suspicious access attempt'})
    #    return response, 401

    try:
        uploadedFile = request.files["allyFile"]
        global allyDataFrame
        allyDataFrame = pd.read_csv(uploadedFile)

        response = prepResponse({"message": "Upload successful"})
        print(response)
        return response, 200
    except Exception as e:
        print(e)
        return prepResponse({"message": "File is invalid or failed to upload. Please try again."}), 400


#--------------------------


@app.route('/updating', methods=['GET', 'POST'])
def updating():
    if not session.get('authorized'):
        return render_template('login.html', msg="Error: you must log in to access this application."), 403

    # GET
    if request.method == 'GET':
        return render_template('updating.html')

    if request.method == 'POST':

        if request.form["check"]:
            print("Caught a bot!! Get out of here!")
            return redirect(url_for('submitted', msg="Error: please contact your site admin."))

        triggerType = request.form['trigger-type']
        boardId = request.form['board-id']
        crBoxId = request.form['cr-box-id']
        mondayAPIKey = request.form['mon-api-key']

        error = False

        if allyDataFrame is None:
            print("No ally file")
            flash("You must upload a valid Ally file to continue.")
            error = True

        print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

        if triggerType == "" or not boardId or not crBoxId or not mondayAPIKey:
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

        if not session.get('accessTok'):
            flash('Box authorization incomplete.')
            return render_template('index.html')

        allyData = allyDataFrame
        accessTokVal = session["accessTok"]

        t1 = Thread(target=doUpdate, args=(triggerType, boardId, crBoxId, mondayAPIKey, allyData, accessTokVal))
        t1.start()

        return redirect(url_for('updating'))

    return render_template('index.html')


def doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, allyData, accessTok):
    global status
    status = 0

    print(f"doing the update {status}")

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
        if triggerType == "new":
            fillNewBoard(completeReport, boardId, mondayAPIKey)
            print(f"Fill in complete {status}")
            status += 7
            return

        updateExistingBoard(completeReport, boardId, mondayAPIKey)
        print(f"Update complete: {status}")
        status += 7
    except Exception as e:
        print(e)
        status = "error3"


@app.route('/status', methods=['GET'])
def getStatus():
    if not session.get('authorized'):
        return render_template('login.html', msg="Error: you must log in to access this application."), 403

    statusList = {'status': status}

    return json.dumps(statusList)


#--------------------------


@app.route('/bug-report', methods=['GET', 'POST'])
def bugReport():
    if not session.get('authorized'):
        return render_template('login.html', msg="Error: you must log in to access this application."), 403

    supportedTools = ["QA Update"]

    # GET
    if request.method == 'GET':
        return render_template('bugReport.html')

    if request.method == 'POST':
        if request.form["check"]:
            print("Caught a bot!! Get out of here!")
            return redirect(url_for('submitted', msg="Error: please contact your site admin."))

        if not request.form["app-name"] in supportedTools:
            return redirect(url_for('submitted', msg='Invalid application name (stop messing with my dev tools!)'))

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
        message += f"allyDataframe: {allyDataFrame}\n"
        message += f"accessTok: {session['accessTok']}\n"
        message += f"refreshTok: {session['refreshTok']}\n"
        message += f"csrf: {session['csrf']}\n"
        message += f"active user: {session['activeUser']}\n"

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


#--------------------------

@app.route('/submitted', methods=['GET'])
def submitted():
    msg = request.args.get('msg')
    return render_template('submitted.html', msg=msg)


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")
    dotenv.load_dotenv(dotenv.find_dotenv())
