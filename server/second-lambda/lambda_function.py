import json
import os
import smtplib, ssl
from email.message import EmailMessage
from datetime import datetime
import pandas as pd
import requests

from updateMonday import simulateUpdate, doOneUpdate

DEV_EMAIL = os.environ.get("DEV_EMAIL")
EMAIL_PASS = os.environ.get("EMAIL_PASS")
API_URL = "https://api.monday.com/v2"


def lambda_handler(event, context):
    triggerType = event["triggerType"]
    encodedCompleteReport = event["completeReport"]
    boardId = event["boardId"]
    mondayAPIKey = event["mondayAPIKey"]
    recipient = event["recipient"]
    numNew = event["numNew"]
    numUpdated = event["numUpdated"]

    completeReport = pd.read_json(encodedCompleteReport, orient='index')

    print(f"Invoking with {len(completeReport.index)} rows left.")
    print(f"{triggerType}, {completeReport}, {boardId}, {mondayAPIKey}, {recipient}");

    currBoard = {}

    # if triggerType == "update":
    #    HEADERS = {"Authorization": mondayAPIKey}
    #    getIdsQuery = f'{{ boards(ids:{boardId}) {{ name items {{ name id }} }} }}'
    #    data = {'query': getIdsQuery}

    #    r = requests.post(url=API_URL, json=data, headers=HEADERS)
    #    jsonObj = json.loads(r.content)

    #    for theRow in jsonObj["data"]["boards"][0]["items"]:
    #        currBoard[theRow["name"]] = theRow["id"]

    failsafe = 0
    while not completeReport.empty:

        # check if we're almost out of time, if we are and we're not done, pass stuff to next one

        completeReport = simulateUpdate(completeReport)
        # result = doOneUpdate(completeReport, boardId, mondayAPIKey, currBoard)
        # completeReport = result[0]
        # numUpdated += result[1]
        # numNew += result[2]

        # print(failsafe)
        if failsafe >= 10:
            return {'status': 'failed'}
        failsafe += 1;

    composeEmail(triggerType, completeReport, boardId, mondayAPIKey, recipient)

    return {
        'status': 'successful! thank youuu'
    }

    # if triggerType == "new":
    #    results = fillNewBoard(completeReport, boardId, mondayAPIKey)
    #    return f"Added {results} new rows."
    # results = updateExistingBoard(completeReport, boardId, mondayAPIKey)
    # return f"Added {results[0]} new rows and audited {results[1]} existing rows."


def composeEmail(triggerType, completeReport, boardId, mondayAPIKey, recipient):
    msg = "Hello! We are sending an email from the child lambda!\nGuess what we know!!\n"
    msg += f"{triggerType}\n{completeReport}\n{boardId}\n{mondayAPIKey}"

    sendEmail(msg, "Test From Child", recipient)


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