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

from flask import Flask, request, redirect, url_for
from flask_cors import CORS
from boxsdk import Client, OAuth2
import os
import json
import pandas as pd
import smtplib
import ssl

import random

from email.message import EmailMessage
from datetime import datetime

import awsgi #for production
import boto3 #for production

botoClient = boto3.client('lambda') #for production

from getAllyData import startGettingUrl
from databaseInteraction import getAllDatabaseItems, addRowToInterDatabase, addRowToTermDatabase, updateDatabaseRow, getItem, checkRowExistence

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['SECRET_KEY'] = os.environ.get('CSRF')

#allyDataFrame = None

EXTENSION_FUNC = os.environ.get("EXTENSION_FUNC")

CLIENT_URL_CORS = "https://master.d1m71ela3noy6u.amplifyapp.com"
CLIENT_URL = f"{CLIENT_URL_CORS}/"
ALLOWED_EXTENSIONS = {'csv'}
REDIRECT_URL = f"{CLIENT_URL}oauth/callback"
PARTIAL_URL = "master.d1m71ela3noy6u.amplifyapp.com"

BOX_CLIENT_ID = os.environ.get("BOX_CLIENT_ID")
BOX_SECRET = os.environ.get("BOX_SECRET")

DEV_EMAIL = os.environ.get("DEV_EMAIL")
EMAIL_PASS = os.environ.get("EMAIL_PASS")

BUCKET_NAME = "dev-qa-update-data-bucket"

INTERACTION_TABLE_NAME = 'QA_Interactions'
TERM_TABLE_NAME = 'QA_Terms'

def getAllyFileS3Name(id):
    return f"ally-data-{id}.txt"


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

    #id = genInterID()
    #print(id)

    #return prepResponse("{'response': '" + id + "'}")

    #addRowToDatabase(id, INTERACTION_TABLE_NAME)
    #updateDatabaseRow('310', INTERACTION_TABLE_NAME)


    return prepResponse("{'response': 'hello world!!!'}")


def genInterID():

    existingCodes = getAllDatabaseItems(INTERACTION_TABLE_NAME)

    code = str(random.randint(100, 999))
    while True:
        for item in existingCodes:
            if code == item["InterID"]:
                print("Already existing, trying a new one")
                code = str(random.randint(100, 999))
                continue
        break
    addRowToInterDatabase(code, INTERACTION_TABLE_NAME)
    return code


@app.route('/get-box-url', methods=['GET'])
def getBoxUrl():

    args = request.args
    interID = args.get("interID")

    auth_url = f'https://account.box.com/api/oauth2/authorize?state={interID}&response_type=code&client_id={BOX_CLIENT_ID}&redirect_uri=https%3A%2F%2F{PARTIAL_URL}%2Foauth%2Fcallback'

    return prepResponse({'authUrl': auth_url, 'csrfTok': interID}), 200


@app.route('/get-ally-link', methods=['POST'])
def getAllyLink():
    requestInfo = json.loads(request.data)

    allyClientId = requestInfo["clientId"]
    allyConsumKey = requestInfo["consumKey"]
    allyConsumSec = requestInfo["consumSec"]
    termCode = requestInfo["termCode"]

    if not allyClientId or not allyConsumKey or not allyConsumSec or not termCode:
        return prepResponse({"error": "invalid input"}), 400

    resp = getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if resp == -1:
        print("Getting ally url failed")
        return prepResponse({"error": "getting ally link failed"}), 500
    print(f"The end: {resp[-3:]}")
    if resp[-3:] == "...":
        done = "false"
    else:
        done = "true"

    response = prepResponse({"link": resp, "done": done})
    return response


def getAllyURL(allyClientId, allyConsumKey, allyConsumSec, termCode):
    result = startGettingUrl(allyClientId, allyConsumKey, allyConsumSec, termCode)
    if result == -1:
        return -1
    elif result[-3:] != "...":
        return f"http{result[5:-1]}"
    else:
        return result


@app.route('/process-ally-file', methods=['POST'])
def processAllyFile():
    print(request.files)

    interID = genInterID();

    try:
        for file in request.files.getlist('files'):
            if file and file.filename.split('.')[-1].lower() in ALLOWED_EXTENSIONS:
                allyDataFrame = pd.read_csv(file)

                print("Uploading ally file to S3")
                allyKey = uploadToS3(allyDataFrame, getAllyFileS3Name(interID))
            else:
                return prepResponse({"message": "File type is invalid. The file will be called courses.csv."}), 400

        return prepResponse({"message": "Upload successful", "interactionID": interID}), 200
    except Exception as e:
        print(e)
        return prepResponse({"message": "File is invalid or failed to upload. Please try again."}), 400


@app.route('/update', methods=['POST'])
def updating():
    requestInfo = json.loads(request.data)

    boxAccess = requestInfo['box-access']
    boxRefresh = requestInfo['box-refresh']
    triggerType = requestInfo['trigger-type']
    boardId = requestInfo['board-id']
    crBoxId = requestInfo['cr-box-id']
    mondayAPIKey = requestInfo['mon-api-key']
    email = requestInfo['email']
    interID = requestInfo['interID']

    error = False
    errorMessage = ""

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}, interID: {interID}")

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
        if checkRowExistence(TERM_TABLE_NAME, boardId, "id") is None:
            errorMessage += 'Unsupported monday board - please check for accuracy. If correct, please add support for the new board by Adding a New Term from the navigation bar above.'
            error = True

    if boxAccess == "":
        errorMessage += 'Box authorization incomplete, '
        error = True

    if interID == "":
        errorMessage += 'Interaction id missing, '
        error = True

    if error:
        return prepResponse({"updateStatus": "The following error(s) occurred: " + errorMessage}), 400

    print(f"triggerType: {triggerType}, boardID: {boardId}, crBoxID: {crBoxId}")

    result = doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, email, boxAccess, boxRefresh, interID)
    if result is None or result.startswith("Exception"):
        return prepResponse({"updateStatus": "Incomplete (error)", "result": result}), 500
    return prepResponse({"updateStatus": "Successfully initiated", "result": result}), 200


def doUpdate(triggerType, boardId, crBoxId, mondayAPIKey, email, boxAccess, boxRefresh, interID):

    print("doing the update")
    boxInfo = {"id": crBoxId, "type": "excel", "accessTok": boxAccess, "refreshTok": boxRefresh}

    try:
        print("doing the long update")
        return doLongUpdate(triggerType, boardId, boxInfo, mondayAPIKey, email, interID)
    except Exception as e:
        print(f"Exception doing update. {e}")
        return f"Exception doing update. {e}"


def doLongUpdate(triggerType, boardId, boxInfo, mondayAPIKey, email, interID):

    inputParams = {
        "triggerType": triggerType,
        "completeReportName": "",
        "boardId": boardId,
        "mondayAPIKey": mondayAPIKey,
        "recipient": email,
        "numNew": 0,
        "numUpdated": 0,
        "lambdaCycles": 0,
        "failedCourses": [],

        "needToCombineAndGetBox": True,
        "boxInfo": boxInfo,
        "interID": interID
    }

    print("invoking other function- bye!")
    response = botoClient.invoke(
       FunctionName=EXTENSION_FUNC,
       InvocationType='Event',
       Payload=json.dumps(inputParams)
    )

    #responseFromChild = json.load(response['Payload'])

    toReturn = "Uploaded data has been blended and the monday update has been successfully initiated."

    return toReturn


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
    print("Sending an email now")

    supportedTools = ["QA Update", "YCCT"]

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


@app.route('/add-new-term', methods=['POST'])
def addNewTerm():
    requestInfo = json.loads(request.data)

    boardId = requestInfo["boardId"]
    termName = requestInfo["termName"]
    triggerCol = requestInfo["triggerId"]

    print(f"Got {boardId} and {termName} and {triggerCol}")

    if addRowToTermDatabase(boardId, termName, triggerCol, TERM_TABLE_NAME)["ResponseMetadata"]["HTTPStatusCode"] == 200:
        response = prepResponse({"status": "success"})
        return response
    else:
        response = prepResponse({"status": "error"})
        return response


@app.route('/current-terms', methods=['GET'])
def listCurrentTerms():

    boards = getAllDatabaseItems(TERM_TABLE_NAME)

    response = prepResponse({"boards": boards})
    return response


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")

def lambda_handler(event, context):  # for production
   return awsgi.response(app, event, context)
