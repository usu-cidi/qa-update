import json
import os
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime
import pandas as pd
import requests
import boto3

from updateMonday import doOneUpdate
from combineData import combineReports
from talkToBox import getDataFromBox

DEV_EMAIL = os.environ.get("DEV_EMAIL")
EMAIL_PASS = os.environ.get("EMAIL_PASS")
MY_NAME = os.environ.get("MY_NAME")
API_URL = "https://api.monday.com/v2"
S3_BUCKET = 'qa-update-data-bucket'
FILE_NAME = "qa-update-data.txt"

TIMEOUT = 45000  # <- 45 seconds


def lambda_handler(event, context):
    try:

        if context.get_remaining_time_in_millis() <= (TIMEOUT + 10000):
            print("The function does not have enough time to execute. Please increase the timeout window.")
            raise Exception("Timeout window too small.")

        triggerType = event["triggerType"]
        objKey = event["completeReportName"]
        boardId = event["boardId"]
        mondayAPIKey = event["mondayAPIKey"]
        recipient = event["recipient"]
        numNew = event["numNew"]
        numUpdated = event["numUpdated"]
        lambdaCycles = event["lambdaCycles"]
        failedCourses = event["failedCourses"]

        needToStart = event["needToCombineAndGetBox"]
        print(needToStart)
        if needToStart:
            print("this is the first one! we need the box data")
            boxInfo = event["boxInfo"]
            courseReportData = getDataFromBox(boxInfo["id"], boxInfo["type"], boxInfo["accessTok"])

            print("and now we need to combine the data")
            allyKey = event["allyKey"]

            allyData = getFromS3(allyKey)

            completeReport = combineReports(courseReportData, allyData)

            objKey = uploadToS3(completeReport, FILE_NAME)

        lambdaCycles += 1

        completeReport = getFromS3(objKey)

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

        # failsafe = 0
        while not completeReport.empty:
            # if failsafe >= 15:
            #    return
            # check if we're almost out of time, if we are and we're not done, pass stuff to next one
            if context.get_remaining_time_in_millis() <= TIMEOUT:
                if completeReport.empty:
                    break
                    print("BAD BAD BAD BAD DELETE IT DELETE IT BAD")

                key = uploadToS3(completeReport, FILE_NAME)

                # reportToSend = completeReport.to_json(orient='index')
                dataToPass = {
                    "triggerType": triggerType,
                    "completeReportName": key,
                    "boardId": boardId,
                    "mondayAPIKey": mondayAPIKey,
                    "recipient": recipient,
                    "numNew": numNew,
                    "numUpdated": numUpdated,
                    "lambdaCycles": lambdaCycles,
                    "failedCourses": failedCourses,
                    "needToCombineAndGetBox": False,
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
                # failsafe += 1;
                rowData = completeReport.iloc[0].values.tolist()
                completeReport = completeReport.tail(-1)
                print(f"{rowData[0]} failed to add :( ({e})")
                failedCourses.append(rowData[0])

        composeEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, failedCourses)
    except Exception as e:
        print(e)
        composeErrorEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, e)
        composeErrorEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, e, True)


def getFromS3(fileKey):
    s3_client = boto3.client("s3")
    encoded_file_content = s3_client.get_object(Bucket=S3_BUCKET, Key=fileKey)["Body"].read()
    fileContent = encoded_file_content.decode("utf-8")
    completeReport = pd.read_json(fileContent, orient='index')
    return completeReport


def uploadToS3(dataframe, fileName):
    string = dataframe.to_json(orient='index')
    encoded_string = string.encode("utf-8")

    s3_path = fileName
    print(s3_path)

    s3 = boto3.resource("s3")
    s3Response = s3.Bucket(S3_BUCKET).put_object(Key=s3_path, Body=encoded_string)
    print(s3Response)
    print(s3Response.key)
    key = s3Response.key
    return key


def make_recursive_call(event, context, theData):
    print("Making a recursive call...")
    botoClient = boto3.client('lambda')
    botoClient.invoke(
        FunctionName=MY_NAME,
        InvocationType='Event',
        Payload=json.dumps(theData)
    )


def composeEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, failedCourses):
    print("Time to send an email")
    sub = f"QA Update Completion {datetime.now()}"

    msg = f"You initiated an update (type: {triggerType}) of "
    msg += f"the QA board with the following id: {boardId}. "
    msg += f"The update is now complete after {lambdaCycles} lambda cycles.\n\n"
    msg += f"As a result of the update:\n {numNew} new rows were added"
    msg += f"\n {numUpdated} existing rows were audited and updated if needed\n\n"

    msg += f"The following rows failed to add or update:\n"
    for course in failedCourses:
        msg += f"{course}\n"

    msg += "\nThanks for updating the QA board!\n\n"
    msg += "(Something not working as expected? Fill out a bug report here: https://master.d3kepc58nvsh8n.amplifyapp.com/bug-report)"

    sendEmail(msg, sub, recipient)
    msg += f"\n\n Initiated by {recipient}"
    sendEmail(msg, f"QA Performance Report {datetime.now()}", DEV_EMAIL)


def composeErrorEmail(triggerType, boardId, recipient, numNew, numUpdated, lambdaCycles, err, toMe=False):
    print("Time to send an error email")
    sub = f"QA Update Error {datetime.now()}"

    msg = f"You initiated an update (type: {triggerType}) of "
    msg += f"the QA board with the following id: {boardId}. "

    msg += f"The update failed for the following reason: {err}.\n"
    msg += f"Please fill out a bug report form and include the text of this message: https://master.d3kepc58nvsh8n.amplifyapp.com/bug-report\n"

    msg += f"{lambdaCycles} lambda cycles; {numNew} attempted new rows; {numUpdated} attempted updated rows;\n\n"

    if toMe:
        msg += f"\n\n Initiated by {recipient}"
        sendEmail(msg, sub, DEV_EMAIL)
    else:
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