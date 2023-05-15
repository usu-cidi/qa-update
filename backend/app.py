from flask import Flask, request, jsonify, render_template, flash, redirect, url_for, session
from flask_cors import CORS
import dotenv    # for dev
from boxsdk import Client, OAuth2
import os
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
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = os.environ.get('CSRF')

link = "inactive"
status = "inactive"
allyDataFrame = None

accessToken = ""
boxCSRF = ""
activeUser = ""

COOKIE = os.environ.get('COOKIE')
FRONT_URL = "http://localhost:8000"
CLIENT_URL = "http://localhost:8080/"
CLIENT_URL_CORS = "http://localhost:8080"
ALLOWED_EXTENSIONS = {'csv'}
REDIRECT_URL = 'http://localhost:8080/oauth/callback'


def checkAuth(cookie):
    print(f"Is {cookie} equal to {COOKIE}???")
    if cookie == COOKIE:
        return True
    else:
        return False


def noAuthResponse():
    response = jsonify({'error': 'not authenticated'})
    response.headers.add('Access-Control-Allow-Origin', CLIENT_URL_CORS)
    response.headers.add('Access-Control-Allow-Credentials', "true")
    return response


def prepResponse(data):
    response = jsonify(data)
    #response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Origin', CLIENT_URL_CORS)
    response.headers.add('Access-Control-Allow-Credentials', "true")
    return response


@app.route('/', methods=['GET'])
def initialLogin():
    submittedCode = request.args.get("code")

    if request.args.get("check") != "":
        response = jsonify({'cookie': 'pshhh you thought :/'})
        response.headers.add('Access-Control-Allow-Origin', FRONT_URL)
        return response, 401

    authorizedUsers = json.loads(os.environ.get("AUTH_USERS"))
    if submittedCode in authorizedUsers:
        global activeUser
        activeUser = authorizedUsers[submittedCode]
        print(f"{authorizedUsers[submittedCode]} is trying to access the site with approved code {submittedCode}")

        response = prepResponse({'cookie': COOKIE})
        response.set_cookie("Bonus cookie", "crunch crunch")
        return response, 200

    return prepResponse({'cookie': 'pshhh you thought :/'}), 401

#--------------------------


@app.route('/get-box-url', methods=['GET'])
def getBoxUrl():
    print(request.cookies)
    print(f"The cookie: {request.cookies.get('Token')}")
    if not checkAuth(request.cookies.get("Token")):
        return noAuthResponse(), 401

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url(REDIRECT_URL)
    global boxCSRF
    boxCSRF = csrf_token

    return prepResponse({'authUrl': auth_url, 'csrfTok': csrf_token}), 200


def store_tokens(access_token: str, refresh_token: str) -> bool:
    """
    Store the access and refresh tokens for the current user
    """

    global accessToken
    accessToken = access_token

    print(f"Here is the access token!! {accessToken}")

    return True


@app.route('/finish-oauth', methods=['POST'])
def oauth_callback():

    code = json.loads(request.data)["code"]
    state = json.loads(request.data)["state"]

    print(f"code: {code}")

    try:
        oauth = OAuth2(
            client_id=os.environ.get('BOX_CLIENT_ID'),
            client_secret=os.environ.get('BOX_SECRET'),
            store_tokens=store_tokens
        )

        access_token, refresh_token = oauth.authenticate(code)
        print(access_token)

        return prepResponse({'access_token': access_token, 'result': "Success"}), 200
    except Exception as e:
        return prepResponse({'access_token': "", 'result': f"Failed: {e}"}), 200


#--------------------------


@app.route('/get-ally-link', methods=['POST'])
def getAllyLink():
    if not checkAuth(request.cookies.get("Token")):
        return noAuthResponse(), 401

    requestInfo = json.loads(request.data)
    print(requestInfo)

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

    return prepResponse({"link": url}), 200


def getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode):
    result = getURL(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if result == -1:
        return -1
    else:
        return f"http{result[5:-1]}"


@app.route('/process-ally-file', methods=['POST'])
def processAllyFile():
    if not checkAuth(request.cookies.get("Token")):
        return noAuthResponse(), 401

    print(request.files)

    try:
        for file in request.files.getlist('files'):
            if file and file.filename.split('.')[-1].lower() in ALLOWED_EXTENSIONS:
                global allyDataFrame
                allyDataFrame = pd.read_csv(file)
                print(allyDataFrame)
            else:
                return prepResponse({"message": "File type is invalid. The file should be named courses.csv."}), 400

        return prepResponse({"message": "Upload successful"}), 200
    except Exception as e:
        print(e)
        return prepResponse({"message": "File is invalid or failed to upload. Please try again."}), 400


#--------------------------


@app.route('/update', methods=['POST'])
def updating():
    if not checkAuth(request.cookies.get("Token")):
        return noAuthResponse(), 401

    requestInfo = json.loads(request.data)

    triggerType = requestInfo['trigger-type']
    boardId = requestInfo['board-id']
    crBoxId = requestInfo['cr-box-id']
    mondayAPIKey = requestInfo['mon-api-key']

    error = False
    errorMessage = ""

    if allyDataFrame is None:
        errorMessage += "Ally file invalid. "
        error = True

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

    if triggerType == "" or not boardId or not crBoxId or not mondayAPIKey:
        errorMessage += 'All fields are required! '
        error = True
    else:
        if triggerType != "update" and triggerType != "new":
            errorMessage += 'Invalid update type (stop messing with my dev tools!) '
            error = True
        if not boardId.isdigit() or int(boardId) <= 0:
            errorMessage += 'Invalid monday board ID '
            error = True
        if not crBoxId.isdigit() or int(crBoxId) <= 0:
            errorMessage += 'Invalid course report ID'
            error = True

    if not accessToken:
        errorMessage += 'Box authorization incomplete. '

    if error:
        return prepResponse({"updateStatus": "The following error(s) occurred: " + errorMessage}), 400

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

    allyData = allyDataFrame
    accessTokVal = accessToken

    result = doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, allyData, accessTokVal)
    if result.startswith("Exception"):
        return prepResponse({"updateStatus": "Incomplete (error)", "result": result}), 500
    return prepResponse({"updateStatus": "Complete", "result": result}), 200


def doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, allyData, accessTok):
    try:
        courseReportData = getDataFromBox(crBoxId, 'excel', accessTok)
    except Exception as e:
        print(e)
        return f"Exception getting box data. {e}"

    try:
        completeReport = combineReports(courseReportData, allyData)
    except Exception as e:
        print(e)
        return f"Exception combining reports. {e}"

    try:
        if triggerType == "new":
            results = fillNewBoard(completeReport, boardId, mondayAPIKey)
            return f"Added {results} new rows."

        results = updateExistingBoard(completeReport, boardId, mondayAPIKey)
        return f"Added {results[0]} new rows and audited {results[1]} existing rows."
    except Exception as e:
        print(e)
        return f"Exception updating monday. {e}"


#--------------------------


@app.route('/send-bug-email', methods=['POST'])
def bugReport():
    if not checkAuth(request.cookies.get("Token")):
        return noAuthResponse(), 401

    print("We are supposed to send an email now!!")

    supportedTools = ["QA Update"]

    requestInfo = json.loads(request.data)

    if not requestInfo["app-name"] in supportedTools:
        return redirect(url_for('submitted', msg='Invalid application name (stop messing with my dev tools!)'))

    reportInfo = {
        "App Name": requestInfo["app-name"],
        "Date and time": requestInfo["date-time"],
        "Expected Behavior": requestInfo["expected-behavior"],
        "Actual Behavior": requestInfo["actual-behavior"],
        "Errors": requestInfo["errors"],
        "Browser": requestInfo["browser"],
        "Other Info": requestInfo["other-info"],
        "Name": requestInfo["name"],
        "Email": requestInfo["email"],
    }

    message = f"Bug reported for {requestInfo['app-name']} submitted on {datetime.now()}" \
              f"\n\n------Form Info------\n"

    for info in reportInfo:
        message += f"{info}: {reportInfo[info]}\n"

    message += "\n------Runtime Info------\n"

    message += f"status: {status}\n"
    message += f"link: {link}\n"
    message += f"allyDataframe: {allyDataFrame}\n"
    message += f"accessTok: {accessToken}\n"
    message += f"csrf: {boxCSRF}\n"
    message += f"active user: {activeUser}\n"

    sendEmail(message, f"Bug Report - {requestInfo['app-name']}")
    return prepResponse({"result": "Email sent"}), 200


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


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")
    dotenv.load_dotenv(dotenv.find_dotenv())
