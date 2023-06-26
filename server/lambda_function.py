# Copyright (C) 2023  Emma Lynn
#
#     This program is free software: you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation, version 3 of the License.
#
#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.
#
#     You should have received a copy of the GNU General Public License
#     along with this program.  If not, see <https://www.gnu.org/licenses/>.

from flask import Flask, request, jsonify, render_template, flash, redirect, url_for, session
from flask_cors import CORS
from boxsdk import Client, OAuth2
import os
import json
import pandas as pd
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime

from io import BytesIO

# import awsgi #for production
# import boto3 #for production

# botoClient = boto3.client('lambda') #for production

from getAllyData import startGettingUrl

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['SECRET_KEY'] = os.environ.get('CSRF')

allyDataFrame = None

COOKIE = os.environ.get("COOKIE")
EXTENSION_FUNC = os.environ.get("EXTENSION_FUNC")

# CLIENT_URL_CORS = "https://master.d3kepc58nvsh8n.amplifyapp.com"
CLIENT_URL_CORS = "http://localhost:8080"
CLIENT_URL = f"{CLIENT_URL_CORS}/"
ALLOWED_EXTENSIONS = {'csv'}
REDIRECT_URL = f"{CLIENT_URL}oauth/callback"

BOX_CLIENT_ID = os.environ.get("BOX_CLIENT_ID")
BOX_SECRET = os.environ.get("BOX_SECRET")

DEV_EMAIL = os.environ.get("DEV_EMAIL")
EMAIL_PASS = os.environ.get("EMAIL_PASS")

BOARD_IDS = {"3692723016": "Dev", "4330918867": "Summer 2023", "4330926569": "Fall 2023", "4565600141": "Dev"}

BUCKET_NAME = "qa-update-data-bucket"


def prepResponse(body, code=200, isBase64Encoded="false"):
    response = {
        "isBase64Encoded": isBase64Encoded,
        "statusCode": code,
        "headers": {"Access-Control-Allow-Origin": CLIENT_URL_CORS, 'Access-Control-Allow-Credentials': "true"},
        "body": body
    }
    return response


@app.route('/test')
def test():
    return prepResponse("{'response': 'hello world!!!'}")


# --------------------------


@app.route('/get-box-url', methods=['GET'])
def getBoxUrl():
    oauth = OAuth2(
        client_id=BOX_CLIENT_ID,
        client_secret=BOX_SECRET,
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url(REDIRECT_URL)

    return prepResponse({'authUrl': auth_url, 'csrfTok': csrf_token}), 200


def store_tokens(access_token: str, refresh_token: str) -> bool:
    return True

# --------------------------


@app.route('/get-ally-link', methods=['POST'])
def getAllyLink():
    requestInfo = json.loads(request.data)
    #print("The request info is " + str(requestInfo))

    allyClientId = requestInfo["clientId"]
    allyConsumKey = requestInfo["consumKey"]
    allyConsumSec = requestInfo["consumSec"]
    termCode = requestInfo["termCode"]

    if not allyClientId or not allyConsumKey or not allyConsumSec or not termCode:
        return prepResponse({"error": "invalid input"}), 400

    resp = startGettingUrl(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if resp == -1:
        print("Getting ally url failed")
        return prepResponse({"error": "getting ally link failed"}), 500
    print(f"The end: {resp[-3:]}")
    if resp[-3:] == "...":
        done = "false"
    else:
        done = "true"

    response = prepResponse({"link": resp, "done": done})
    #print(response)
    return response


def getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode):
    result = getURL(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if result == -1:
        return -1
    else:
        return f"http{result[5:-1]}"


@app.route('/process-ally-file', methods=['POST'])
def processAllyFile():
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


# --------------------------

@app.route('/update', methods=['POST'])
def updating():
    requestInfo = json.loads(request.data)

    boxAccess = requestInfo['box-access']
    triggerType = requestInfo['trigger-type']
    boardId = requestInfo['board-id']
    crBoxId = requestInfo['cr-box-id']
    mondayAPIKey = requestInfo['mon-api-key']
    email = requestInfo['email']

    error = False
    errorMessage = ""

    if allyDataFrame is None:
        errorMessage += "Ally file invalid. "
        error = True

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

    if triggerType == "" or not boardId or not crBoxId or not mondayAPIKey or not email:
        errorMessage += 'All fields are required! '
        error = True
    else:
        if triggerType != "update" and triggerType != "new":
            errorMessage += 'Invalid update type (stop messing with my dev tools!) '
            error = True
        if not boardId.isdigit() or int(boardId) <= 0:
            errorMessage += 'Invalid monday board ID, '
            error = True
        if not crBoxId.isdigit() or int(crBoxId) <= 0:
            errorMessage += 'Invalid course report ID, '
            error = True
        if not boardId in BOARD_IDS:
            errorMessage += 'Unsupported monday board - please check for accuracy and then contact your developer to ' \
                            'add support for the new board'
            error = True

    if not boxAccess:
        errorMessage += 'Box authorization incomplete, '

    if error:
        return prepResponse({"updateStatus": "The following error(s) occurred: " + errorMessage}), 400

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

    allyData = allyDataFrame

    result = doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, allyData, email, boxAccess)
    if result is None or result.startswith("Exception"):
        return prepResponse({"updateStatus": "Incomplete (error)", "result": result}), 500
    return prepResponse({"updateStatus": "Successfully initiated", "result": result}), 200


def doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, allyData, email, boxAccess):
    boxInfo = {"id": crBoxId, "type": "excel", "accessTok": boxAccess}
    print(f"simulating the update")
    print(triggerType, boardId, allyData, boxInfo, mondayAPIKey, email)
    return "Update successfully simulated"


def doUpdateActually(triggerType, boardId, crBoxId, mondayAPIKey, allyData, email, boxAccess):
    print("doing the update")
    boxInfo = {"id": crBoxId, "type": "excel", "accessTok": boxAccess}

    try:
        print("doing the long update")
        return doLongUpdate(triggerType, boardId, allyData, boxInfo, mondayAPIKey, email)
    except Exception as e:
        print(f"Exception doing update. {e}")
        return f"Exception doing update. {e}"


def doLongUpdate(triggerType, boardId, allyData, boxInfo, mondayAPIKey, email):
    print("adding dataframes to s3")

    # allyKey = uploadToS3(allyData, "ally-data.txt") # for production
    print("Uploading ally file to S3")  # for dev
    allyKey = 0  # for dev

    inputParams = {
        "triggerType": triggerType,
        "completeReportName": "",
        "boardId": boardId,
        "mondayAPIKey": mondayAPIKey,
        "recipient": email,  # DEV_EMAIL,
        "numNew": 0,
        "numUpdated": 0,
        "lambdaCycles": 0,
        "failedCourses": [],

        "needToCombineAndGetBox": True,
        "allyKey": allyKey,
        "boxInfo": boxInfo
    }

    print("invoking other function- bye!")
    # response = botoClient.invoke(
    #    FunctionName=EXTENSION_FUNC,
    #    InvocationType='Event',
    #    Payload=json.dumps(inputParams)
    # )

    # responseFromChild = json.load(response['Payload'])

    toReturn = "Uploaded data has been blended and the monday update has been successfully initiated."

    return toReturn


# --------------------------

def uploadToS3(dataframe, fileName):
    string = dataframe.to_json(orient='index')
    encoded_string = string.encode("utf-8")

    s3_path = fileName

    s3 = boto3.resource("s3")
    s3Response = s3.Bucket(BUCKET_NAME).put_object(Key=s3_path, Body=encoded_string)
    print(s3Response)
    print(s3Response.key)
    key = s3Response.key
    return key


@app.route('/send-bug-email', methods=['POST'])
def bugReport():
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

    message += f"allyDataframe: {allyDataFrame}\n"

    sendEmail(message, f"Bug Report - {requestInfo['app-name']}")
    return prepResponse({"result": "Email sent"}), 200


def sendEmail(message, subject):
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = DEV_EMAIL
    receiver_email = DEV_EMAIL
    password = EMAIL_PASS

    msg = EmailMessage()
    msg.set_content(message)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = receiver_email

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.send_message(msg, from_addr=sender_email, to_addrs=receiver_email)


# --------------------------


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")

# def lambda_handler(event, context):  # for production
#    return awsgi.response(app, event, context)
