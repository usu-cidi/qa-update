import requests
import json
import dotenv
import os
from combineData import combineReports
import pandas as pd
from datetime import date

dotenv.load_dotenv(dotenv.find_dotenv())

API_KEY = os.environ.get('MONDAY_API_KEY')
API_URL = "https://api.monday.com/v2"
HEADERS = {"Authorization": API_KEY}
NUM_STU_INDEX = 9 + 3
# 12: number of students index - MAY BE DIFFERENT IN PRODUCTION
DEL_MET_INDEX = 4
# 4: delivery method index - MAY BE DIFFERENT IN PRODUCTION

COL_IDS = ["text8", "text67", "text83", "text", "text6", "status4", "status35", "status8", "__of_students",
           "__content_in_use",
           "files_total", "files_with_link", "files___in_use", "wysiwyg_content", "wysiwyg_in_use", "videos",
           "kaltura_vids", "youtube", "flash_content", "broken_links", "navigation_items", "status48",
           "overall_a11y_score",
           "files_ally_score", "wysiwyg_ally_score", "__of_pdf_files", "pdf_files_in_use", "pdf_scanned_not_ocr_d",
           "images", "images_wo_alt_text", "numbers", "status_15", "date"]
# "status_15": trigger column - MAY BE DIFFERENT IN PRODUCTION
# "date": last updated column - MAY BE DIFFERENT IN PRODUCTION

SMALL_COL_IDS = ["status_15", "date"]
# "status_15": trigger column - MAY BE DIFFERENT IN PRODUCTION
# "date": last updated column - MAY BE DIFFERENT IN PRODUCTION

GROUP_IDS = {100: "new_group659", 50: "new_group84060", 20: "new_group63769", 10: "new_group69712", 1: "new_group",
             0: "new_group7956"}


def writeToReport(label, object):
    f = open("performanceReport3850265.txt", "a")
    f.write(f"{label}: {object}\n")
    f.close()


def splitLine(line):
    newLine = line.replace("Animal, Dairy & Vet Sciences", "Animal Dairy & Vet Sciences")
    newLine = newLine.replace("Plants, Soils and Climate", "Plants Soils and Climate")
    newLine = newLine.replace("Nutrition, Dietetics &Food Sci", "Nutrition Dietetics &Food Sci")
    newLine = newLine.replace("Humanities, Arts & Social Scie", "Humanities Arts & Social Scie")
    newLine = newLine.replace("Technology, Design & Technical", "Technology Design & Technical")

    newLine = newLine.replace("Study Abroad", "Supervised")
    newLine = newLine.replace("Disability Resource Center", "CPD")

    splitData = newLine.split(",")

    if (splitData[NUM_STU_INDEX - 2] == '"Animal Dairy & Vet Sciences"'):
        splitData[NUM_STU_INDEX - 2] = "Animal, Dairy & Vet Sciences"
    elif (splitData[NUM_STU_INDEX - 2] == '"Plants Soils and Climate"'):
        splitData[NUM_STU_INDEX - 2] = 'Plants, Soils and Climate'
    elif (splitData[NUM_STU_INDEX - 2] == '"Nutrition Dietetics &Food Sci"'):
        splitData[NUM_STU_INDEX - 2] = "Nutrition, Dietetics &Food Sci"
    elif (splitData[NUM_STU_INDEX - 3] == '"Humanities Arts & Social Scie"'):
        splitData[NUM_STU_INDEX - 3] = "Humanities, Arts & Social Scie"
    elif (splitData[NUM_STU_INDEX - 3] == '"Technology Design & Technical"'):
        splitData[NUM_STU_INDEX - 3] = "Technology, Design & Technical"

    return splitData


def findGroupID(numStu):
    for lowerLimit in GROUP_IDS:
        if int(numStu) >= lowerLimit:
            writeToReport("Group ID", GROUP_IDS[lowerLimit])
            return GROUP_IDS[lowerLimit]
    writeToReport("Group ID", GROUP_IDS[0])
    return GROUP_IDS[0]


def createNewItem(rowInfo, boardId):
    groupID = findGroupID(rowInfo[NUM_STU_INDEX])
    query = f'mutation ($myItemName: String!, $columnVals: JSON!) {{ create_item (board_id:{boardId}, group_id:{groupID}, item_name:$myItemName, column_values:$columnVals) {{ id }} }}'
    writeToReport("Attempting query", query)

    rowInfo.append("Updated")
    rowInfo.append(date.today())

    colVals = dict(zip(COL_IDS, rowInfo[1:]))
    vars = {
        'myItemName': rowInfo[0],
        'columnVals': json.dumps(colVals, default=str)
    }

    #print(vars)

    data = {'query': query, 'variables': vars}

    try:
        r = requests.post(url=API_URL, json=data, headers=HEADERS)  # make request
        writeToReport("Response", r.json())

        return r.json()["data"]["create_item"]["id"]
    except Exception as e:
        writeToReport("Exception in API call/JSON", e)
        print(f":( {e}")
        return None

def updateTriggerRow(triggerRowId, boardId, type="Updated"):
    query = f'mutation ($columnVals: JSON!) {{ change_multiple_column_values (board_id:{boardId}, item_id: {triggerRowId}, column_values:$columnVals) {{ name id }} }}'
    writeToReport("Attempting query", query)


    rowInfo = [type, date.today()]

    colVals = dict(zip(SMALL_COL_IDS, rowInfo))
    vars = {
        'columnVals': json.dumps(colVals, default=str)
    }

    data = {'query': query, 'variables': vars}

    try:
        r = requests.post(url=API_URL, json=data, headers=HEADERS)  # make request
        writeToReport("Response", r.json())
        return r.json()["data"]["change_multiple_column_values"]["id"]
    except Exception as e:
        writeToReport("Exception in API call/JSON", e)
        return None

def updateRow(itemID, rowInfo, boardId):
    query = f'mutation ($columnVals: JSON!) {{ change_multiple_column_values (board_id:{boardId}, item_id: {itemID}, column_values:$columnVals) {{ name id }} }}'
    writeToReport("Attempting query", query)

    rowInfo.append("Updated")
    rowInfo.append(date.today())

    colVals = dict(zip(COL_IDS, rowInfo[1:]))
    vars = {
        'columnVals': json.dumps(colVals, default=str)
    }

    data = {'query': query, 'variables': vars}

    try:
        r = requests.post(url=API_URL, json=data, headers=HEADERS)  # make request
        writeToReport("Response", r.json())
        return r.json()["data"]["change_multiple_column_values"]["id"]
    except Exception as e:
        writeToReport("Exception in API call/JSON", e)
        return None


def makeSureInRightGroup(itemID, newNumStu, OGNumStu):
    writeToReport("in makeSureInRightGroup", "")

    if newNumStu != int(OGNumStu):
        writeToReport("the numbers don't match, moving it", '')
        groupID = findGroupID(newNumStu)

        mutation = f'mutation {{move_item_to_group (item_id: {itemID}, group_id: "{groupID}") {{ id }} }}'
        writeToReport("Attempting mutation", mutation)
        data = {'query': mutation}

        try:
            r = requests.post(url=API_URL, json=data, headers=HEADERS)
            writeToReport("Response", r.json())
            # print(r.json())

            return True
        except Exception as e:
            writeToReport("Exception in API call/JSON", e)
            return None

    return True


def getColumnValues(itemID, item):
    query = f'{{ items (ids: [{itemID}]) {{column_values {{id text}} }} }}'
    writeToReport("Attempting query", query)
    data = {'query': query}

    try:
        r = requests.post(url=API_URL, json=data, headers=HEADERS)
        jsonObj = json.loads(r.content)
        writeToReport("Response", r.json())

        # print(jsonObj["data"]["items"][0]["column_values"])

        if item == "numStudents":
            OGNumStu = jsonObj["data"]["items"][0]["column_values"][NUM_STU_INDEX - 1]["text"]
            return OGNumStu
        if item == "ids":
            allyId = jsonObj["data"]["items"][0]["column_values"][4]["text"]
            crId = jsonObj["data"]["items"][0]["column_values"][5]["text"]
            idList = (allyId, crId)
            return idList
    except Exception as e:
        writeToReport("Exception in API call/JSON", e)
        return None


def removeNaN(rowData):
    for item in range(len(rowData)):
        # print(f"Is {rowData[item]} NaN??")
        if pd.isna(rowData[item]):
            rowData[item] = ""
            # print("\tCaught one now!")
    return rowData


def fillNewBoard(courseDF, boardId):
    numNew = 0

    courseDF.replace("Study Abroad", "Supervised")

    for i in courseDF.index:  # through courseDF

        # print(courseDF["Students"][i])

        newNumStudents = courseDF["Students"][i]

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        itemID = createNewItem(rowData, boardId)
        if itemID is None:
            print("Failed")
            # break
            continue
        writeToReport("Adding new row", courseDF["Course"][i])
        numNew += 1
        print(f"{courseDF['Course'][i]} added as new row")


def updateExistingBoard(courseDF, boardId):
    # Just for update ---

    getIdsQuery = f'{{ boards(ids:{boardId}) {{ name items {{ name id }} }} }}'
    data = {'query': getIdsQuery}

    r = requests.post(url=API_URL, json=data, headers=HEADERS)
    jsonObj = json.loads(r.content)

    currBoard = {}
    for theRow in jsonObj["data"]["boards"][0]["items"]:
        currBoard[theRow["name"]] = theRow["id"]

    writeToReport("currentBoard", currBoard)
    # ---

    numNew = 0
    numUpdated = 0  # just for update

    courseDF.replace("Study Abroad", "Supervised")

    for i in courseDF.index:  # through courseDF

        # print(courseDF["Students"][i])

        # newNumStudents = courseDF["Students"][i]

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        # just for update ---
        if courseDF["Course"][i] in currBoard:
            writeToReport("Updating if needed", "")
            itemID = currBoard[courseDF["Course"][i]]
            # ogNumStu = getColumnValues(itemID, "numStudents")

            # if ogNumStu is None:
            #   continue

            if updateRow(currBoard[courseDF["Course"][i]], rowData, boardId) is None:
                continue

            #print(ogNumStu)

            # if makeSureInRightGroup(itemID, newNumStudents, ogNumStu) is None:
            #   continue

            numUpdated += 1
            print(f"{courseDF['Course'][i]} matched and updated if needed")
            # ---
        else:
            itemID = createNewItem(rowData, boardId)
            if itemID is None:
                print("Failed")
                # break
                continue
            writeToReport("Adding new row", courseDF["Course"][i])
            numNew += 1
            print(f"{courseDF['Course'][i]} added as new row")

