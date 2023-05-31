import json
import os
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime
import pandas as pd
import requests
import boto3

from updateMonday import simulateUpdate, doOneUpdate

DEV_EMAIL = os.environ.get("DEV_EMAIL")
EMAIL_PASS = os.environ.get("EMAIL_PASS")
API_URL = "https://api.monday.com/v2"
S3_BUCKET = 'qa-update-data-bucket'
FILE_NAME = "qa-update-data.txt"

TIMEOUT = 30000  # <- 30 seconds


def lambda_handler(event, context):
    try:
        triggerType = event["triggerType"]
        objKey = event["completeReportName"]
        boardId = event["boardId"]
        mondayAPIKey = event["mondayAPIKey"]
        recipient = event["recipient"]
        numNew = event["numNew"]
        numUpdated = event["numUpdated"]
        lambdaCycles = event["lambdaCycles"]

        lambdaCycles += 1;

        # completeReport = pd.read_json(encodedCompleteReport, orient='index')
        s3_client = boto3.client("s3")
        encoded_file_content = s3_client.get_object(Bucket=S3_BUCKET, Key=objKey)["Body"].read()
        fileContent = encoded_file_content.decode("utf-8")
        completeReport = pd.read_json(fileContent, orient='index')

        print(f"Invoking ({lambdaCycles}) with {len(completeReport.index)} rows left.")

        currBoard = {}

        if triggerType == "update":
            HEADERS = {"Authorization": mondayAPIKey}
            getIdsQuery = f'{{ boards(ids:{boardId}) {{ name items {{ name id }} }} }}'
            data = {'query': getIdsQuery}

            r = requests.post(url=API_URL, json=data, headers=HEADERS)
            jsonObj = json.loads(r.content)

            for theRow in jsonObj["data"]["boards"][0]["items"]:
                currBoard[theRow["name"]] = theRow["id"]

        failsafe = 0
        while not completeReport.empty:
            # if failsafe >= 10:
            #    return
            # check if we're almost out of time, if we are and we're not done, pass stuff to next one
            if context.get_remaining_time_in_millis() <= TIMEOUT:
                if completeReport.empty:
                    return
                    print("BAD BAD BAD BAD DELETE IT DELETE IT BAD")

                string = completeReport.to_json(orient='index')
                encoded_string = string.encode("utf-8")

                s3_path = "" + FILE_NAME

                s3 = boto3.resource("s3")
                s3Response = s3.Bucket(S3_BUCKET).put_object(Key=s3_path, Body=encoded_string)
                # print(s3Response)
                print(s3Response.key)
                key = s3Response.key

                # reportToSend = completeReport.to_json(orient='index')
                dataToPass = {
                    "triggerType": triggerType,
                    "completeReportName": key,
                    "boardId": boardId,
                    "mondayAPIKey": mondayAPIKey,
                    "recipient": recipient,
                    "numNew": numNew,
                    "numUpdated": numUpdated,
                    "lambdaCycles": lambdaCycles
                }
                make_recursive_call(event, context, dataToPass)
                return
                print("We should not be here....")

            # completeReport = simulateUpdate(completeReport)
            try:
                result = doOneUpdate(completeReport, boardId, mondayAPIKey, currBoard)
                completeReport = result[0]
                numUpdated += result[1]
                numNew += result[2]
            except Exception as e:
                print(f"A row failed to add :( ({e})")

        composeEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles)
    except Exception as e:
        print(e)
        composeErrorEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, e)


def make_recursive_call(event, context, theData):
    print("Making a recursive call...")
    botoClient = boto3.client('lambda')
    botoClient.invoke(
        FunctionName='arn:aws:lambda:us-east-2:218287806266:function:QAAutomationBackendContinued',
        InvocationType='Event',
        Payload=json.dumps(theData)
    )


def composeEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles):
    print("Time to send an email")
    sub = f"QA Update Completion {datetime.now()}"

    msg = f"You initiated an update (type: {triggerType}) of "
    msg += f"the QA board with the following id: {boardId}. "
    msg += f"The update is now complete after {lambdaCycles} lambda cycles.\n\n"
    msg += f"As a result of the update:\n {numNew} new rows were added"
    msg += f"\n {numUpdated} existing rows were audited and updated if needed\n\n"
    msg += "Thanks for updating the QA board!\n\n"
    msg += "(Something not working as expected? Fill out a bug report here: https://master.d3kepc58nvsh8n.amplifyapp.com/bug-report)"

    sendEmail(msg, sub, recipient)


def composeErrorEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, err):
    print("Time to send an error email")
    sub = f"QA Update Error {datetime.now()}"

    msg = f"You initiated an update (type: {triggerType}) of "
    msg += f"the QA board with the following id: {boardId}. "

    msg += f"The update failed for the following reason: {err}.\n"
    msg += f"Please fill out a bug report form and include the text of this message: https://master.d3kepc58nvsh8n.amplifyapp.com/bug-report\n"

    msg += f"{lambdaCycles} lambda cycles; {numNew} attempted new rows; {numUpdated} attempted updated rows;\n\n"

    sendEmail(msg, sub, recipient)


def sendEmail(message, subject, recipient):
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = DEV_EMAIL
    receiver_email = recipient
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