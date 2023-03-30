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


app = Flask(__name__)
status = None
link = "inactive"
app.config['SECRET_KEY'] = 'your secret key'
allyDataframe = None


def doUpdate(triggerType, boardId, crBoxId):
    global status
    status = 0

    print(f"doing the update {status}")

    allyData = allyDataframe
    status += 1

    courseReportData = getDataFromBox(crBoxId, 'excel', accessTok)
    print(f"gotten course report {status}")
    status += 1

    completeReport = combineReports(courseReportData, allyData)
    print(f"combined reports {status}")
    status += 1

    if triggerType == "Fill whole board":
        fillNewBoard(completeReport, boardId)
        print(f"Fill in complete {status}")
        status += 7

    updateExistingBoard(completeReport, boardId)
    print(f"Update complete: {status}")
    status += 7


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

    assert state == csrf

    if error == 'access_denied':
        print("denial caught!")
        msg = 'You denied access to your Box account, you must authorize QA Update to access your account to use this application.'
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

        if not allyDataframe:
            print("No ally file")
            flash("You must upload a valid Ally file to continue.")

        print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

        if triggerType == "" or not boardId or not crBoxId:
            flash('All fields are required!')
            return render_template('index.html')
        else:
            print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")



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
