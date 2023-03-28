from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
import dotenv
from talkToBox import getDataFromBox
from combineData import combineReports
from updateMonday import fillNewBoard, updateExistingBoard
from boxsdk import Client, OAuth2
import os
from threading import Thread
import threading
import json


app = Flask(__name__)
status = None


class StoppableThread(threading.Thread):
    """Thread class with a stop() method. The thread itself has to check
    regularly for the stopped() condition."""

    def __init__(self, *args, **kwargs):
        super(StoppableThread, self).__init__(*args, **kwargs)
        self._stop_event = threading.Event()

    def stop(self):
        self._stop_event.set()

    def stopped(self):
        return self._stop_event.is_set()


def doUpdate(triggerType, boardId, allyBoxId, crBoxId):
    global status
    status = 0

    print(f"doing the update {status}")

    allyData = getDataFromBox(allyBoxId, "csv", accessTok)
    print(f"gotten ally {status}")
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
    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens,
    )

    auth_url, csrf_token = oauth.get_authorization_url('http://localhost:8000/oauth/callback')
    global csrf
    csrf = csrf_token
    return render_template('loginBox.html', auth_url=auth_url, csrf_token=csrf_token)


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

    oauth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        store_tokens=store_tokens
    )

    assert state == csrf

    access_token, refresh_token = oauth.authenticate(code)

    if error == 'access_denied':
        msg = 'You denied access to this application'
    else:
        msg = error_description

    if msg != None:
        return render_template('loginBox.html', msg=msg)

    return redirect(url_for('landing', link=""))


@app.route('/landing', methods=['GET', 'POST'])
def landing():
    # GET
    if request.method == 'GET':
        return render_template('index.html')

    if request.method == 'POST':
        return redirect(url_for('landing', link=""))

    return render_template('index.html', link="")

@app.route('/getAllyLink', methods=['GET', 'POST'])
def landing():
    # GET
    if request.method == 'GET':
        pass

    if request.method == 'POST':

        link = "heyyyy"

        return redirect(url_for('landing', link=link))

    return render_template('index.html', link="")


@app.route('/updating', methods=['GET', 'POST'])
def updating():
    global t1

    # GET
    if request.method == 'GET':
        return render_template('updating.html')

    if request.method == 'POST':
        try:
            stopProcess = request.form['stop-process']
            print("Attempting to stop process")
            #t1.stop()
            #t1.join()
        except Exception as e:
            triggerType = request.form['trigger-type']
            boardId = request.form['board-id']
            allyBoxId = request.form['ally-box-id']
            crBoxId = request.form['cr-box-id']

            if triggerType == "" or not boardId or not allyBoxId or not crBoxId:
                flash('All fields are required!')
                return render_template('index.html')
            else:
                print(f"{triggerType}, {boardId}, {allyBoxId}, {crBoxId}")

            t1 = Thread(target=doUpdate, args=(triggerType,),
                                 kwargs={'boardId': boardId, 'allyBoxId': allyBoxId, 'crBoxId': crBoxId})
            t1.start()
        finally:
            return redirect(url_for('updating'))

    return render_template('index.html')


@app.route('/status', methods=['GET'])
def getStatus():
    statusList = {'status': status}
    return json.dumps(statusList)


if __name__ == '__main__':
    app.run(port=8000, debug=True, host="localhost")

    dotenv.load_dotenv(dotenv.find_dotenv())
