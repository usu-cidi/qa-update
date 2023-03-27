from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
import dotenv
from talkToBox import getDataFromBox, getAuthUrl, authenticate
from combineData import combineReports
from updateMonday import fillNewBoard, updateExistingBoard, getColumnValues, updateTriggerRow
from boxsdk import Client, OAuth2
import os
import io
import pandas as pd
from threading import Thread
from time import sleep
import json
from urllib.parse import urlparse
from urllib.parse import parse_qs

app = Flask(__name__)
app.config['SECRET_KEY'] = 'bagelTime'
status = None

def doUpdate(triggerType, boardId, allyBoxId, crBoxId):
    global status
    status = 0
    status += 1

    print("doing the update")
    status += 1
    # allyData = getDataFromBox(allyBoxId, "csv")
    print("gotten ally")
    status += 1

    # courseReportData = getDataFromBox(crBoxId, 'excel')
    print("gotten course report")
    status += 1

    # completeReport = combineReports(courseReportData, allyData)
    print("combined reports")
    status += 1

    # if triggerType == "Fill whole board":
        # fillNewBoard(completeReport, boardId)
        # print("Fill in complete")
        # status += 1

    # updateExistingBoard(completeReport, boardId)
    print("Update complete")
    status += 1


@app.route('/idk', methods=['GET', 'POST'])
def idk():
    # GET
    if request.method == 'GET':

        print(request.url)

        #accessToken = authenticate(code)
        print("Authenticated!")

        return render_template('idk.html', box_smth=f'hmmmm')

    if request.method == 'POST':
        pass

    return render_template('idk.html')


@app.route('/', methods=['GET', 'POST'])
def loginBox():

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url('http://localhost:8000/oauth/callback')
    return render_template('loginBox.html', auth_url=auth_url, csrf_token=csrf_token)


def store_tokens(access_token: str, refresh_token: str) -> bool:
    """
    Store the access and refresh tokens for the current user
    """

    global accessTok
    accessTok = access_token
    global refreshTok
    refreshTok = refresh_token

    return True


@app.route('/oauth/callback')
def oauth_callback():
    code = request.args.get('code')
    state = request.args.get('state')
    error = request.args.get('error')
    error_description = request.args.get('error_description')

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens
    )

    # TODO: verify csrf
    # assert state == csrf_token

    access_token, refresh_token = oauth.authenticate(code)

    client = Client(oauth)
    me = client.user().get()
    print(f'My user info is {me}')

    if error == 'access_denied':
        msg = 'You denied access to this application'
    else:
        msg = error_description

    if msg != None:
        return render_template('loginBox.html', msg=msg)

    return redirect(url_for('landing', content=me.id))

@app.route('/landing', methods=['GET', 'POST'])
def landing():
    # GET
    if request.method == 'GET':
        return render_template('index.html', box_smth=request.args.get('content'))

    if request.method == 'POST':
        fileId = request.form['ally-box-id']

        auth = OAuth2(
            client_id=os.environ.get('BOX_CLIENT_ID'),
            client_secret=os.environ.get('BOX_SECRET'),
            access_token=accessTok,
            refresh_token=refreshTok
        )
        client = Client(auth)

        file_info = client.file(fileId)
        some_bytes = file_info.get().content()
        toread = io.BytesIO()
        toread.write(some_bytes)  # pass your `decrypted` string as the argument here
        toread.seek(0)  # reset the pointer

        boxData = pd.read_csv(toread)

        return redirect(url_for('landing', content=boxData))

    return render_template('index.html', box_smth=request.args.get('content'))


@app.route('/updating', methods=['GET', 'POST'])
def updating():
    # GET
    if request.method == 'GET':
        return render_template('updating.html')

    if request.method == 'POST':
        triggerType = request.form['trigger-type']
        boardId = request.form['board-id']
        allyBoxId = request.form['ally-box-id']
        crBoxId = request.form['cr-box-id']

        if triggerType == "" or not boardId or not allyBoxId or not crBoxId:
            flash('All fields are required!')
            return render_template('index.html')
        else:
            print(f"{triggerType}, {boardId}, {allyBoxId}, {crBoxId}")

        t1 = Thread(target=doUpdate, args=(triggerType,), kwargs={'boardId': boardId, 'allyBoxId': allyBoxId, 'crBoxId': crBoxId})
        t1.start()
        # print(f"Made it to updating!! {triggerType}, {boardId}")
        return redirect(url_for('updating'))

    return render_template('index.html')

@app.route('/status', methods=['GET'])
def getStatus():
  statusList = {'status':status}
  return json.dumps(statusList)

def otherThings():
    # POST
    data = request.get_json()
    # print(data)

    if 'challenge' in data:
        print("The challenge is here!!")
        challenge = data['challenge']
        return jsonify({'challenge': challenge}), 200

    if 'event' in data:
        print(f"Board id to update: {data['event']['boardId']}")

        print(data['event']['value']['label']['text'])
        triggerType = data['event']['value']['label']['text']

        boardId = data['event']['boardId']
        triggerRowId = data['event']['pulseId']

        ids = getColumnValues(triggerRowId, "ids")
        allyBoxId = ids[0]  # '1167467551435'
        crBoxId = ids[1]  # '1158649874756'

        if not allyBoxId.isnumeric() or not crBoxId.isnumeric():
            print("Triggered on incorrect row")
            updateTriggerRow(triggerRowId, boardId, "")
            return "Thank you!", 200

        allyData = getDataFromBox(allyBoxId, "csv")
        courseReportData = getDataFromBox(crBoxId, 'excel')

        completeReport = combineReports(courseReportData, allyData)

        if triggerType == "Fill whole board":
            fillNewBoard(completeReport, boardId)
            print("Fill in complete")
            updateTriggerRow(triggerRowId, boardId)
            return "Thank you!", 200

        updateExistingBoard(completeReport, boardId)
        updateTriggerRow(triggerRowId, boardId)
        print("Update complete")

    return "Thank you!", 200


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")

    dotenv.load_dotenv(dotenv.find_dotenv())
