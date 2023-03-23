from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
import dotenv
from talkToBox import getDataFromBox
from combineData import combineReports
from updateMonday import fillNewBoard, updateExistingBoard, getColumnValues, updateTriggerRow

from threading import Thread
from time import sleep
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'bagelTime'
status = None

def task(triggerType, boardId, allyBoxId, crBoxId):
  # global status

  status += 1
  doUpdate(triggerType, boardId, allyBoxId, crBoxId)

  #for i in range(1,11):
    #status = i
    #sleep(1)
    #print(f"{triggerType}, {boardId}, {allyBoxId}, {crBoxId}")

def doUpdate(triggerType, boardId, allyBoxId, crBoxId):
    global status
    status = 0
    status += 1

    print("doing the update")
    status += 1
    allyData = getDataFromBox(allyBoxId, "csv")
    print("gotten ally")
    status += 1
    courseReportData = getDataFromBox(crBoxId, 'excel')
    print("gotten course report")
    status += 1

    completeReport = combineReports(courseReportData, allyData)
    print("combined reports")
    status += 1

    if triggerType == "Fill whole board":
        fillNewBoard(completeReport, boardId)
        print("Fill in complete")
        status += 1

    updateExistingBoard(completeReport, boardId)
    print("Update complete")
    status += 1


@app.route('/', methods=['GET', 'POST'])
def index():
    # GET
    if request.method == 'GET':
        #return "<p>This is USU's QA update application. I don't do much here, try me out on monday.com!</p>", 200
        return render_template('index.html')

    if request.method == 'POST':
        pass

    return render_template('index.html')

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
        print(f"Made it to updating!! {triggerType}, {boardId}")
        return redirect(url_for('updating'))

    return render_template('updating.html')

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
    app.run(port=8000, debug=True)

    dotenv.load_dotenv(dotenv.find_dotenv())
