import requests
import json
import dotenv
import os
from combineData import combineReports
import pandas as pd

dotenv.load_dotenv(dotenv.find_dotenv())

API_KEY = os.environ.get('MONDAY_API_KEY')
API_URL = "https://api.monday.com/v2"
HEADERS = {"Authorization": API_KEY}
NUM_STU_INDEX = 9 + 3
DEL_MET_INDEX = 4

COL_IDS = ["text8", "text67", "text83", "text", "text6", "status4", "status35", "status8", "__of_students",
           "__content_in_use",
           "files_total", "files_with_link", "files___in_use", "wysiwyg_content", "wysiwyg_in_use", "videos",
           "kaltura_vids", "youtube", "flash_content", "broken_links", "navigation_items", "status48",
           "overall_a11y_score",
           "files_ally_score", "wysiwyg_ally_score", "__of_pdf_files", "pdf_files_in_use", "pdf_scanned_not_ocr_d",
           "images", "images_wo_alt_text", "numbers"]

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


def createNewItem(rowInfo):
    groupID = findGroupID(rowInfo[NUM_STU_INDEX])
    query = f'mutation ($myItemName: String!, $columnVals: JSON!) {{ create_item (board_id:{BOARD_ID}, group_id:{groupID}, item_name:$myItemName, column_values:$columnVals) {{ id }} }}'
    writeToReport("Attempting query", query)
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


def updateRow(itemID, rowInfo):
    query = f'mutation ($columnVals: JSON!) {{ change_multiple_column_values (board_id:{BOARD_ID}, item_id: {itemID}, column_values:$columnVals) {{ name id }} }}'
    writeToReport("Attempting query", query)
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


def getOGNumStu(itemID):
    query = f'{{ items (ids: [{itemID}]) {{column_values {{id text}} }} }}'
    writeToReport("Attempting query", query)
    data = {'query': query}

    try:
        r = requests.post(url=API_URL, json=data, headers=HEADERS)
        jsonObj = json.loads(r.content)
        writeToReport("Response", r.json())
        OGNumStu = jsonObj["data"]["items"][0]["column_values"][NUM_STU_INDEX - 1]["text"]
        return OGNumStu
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


def fillNewBoard(courseDF):
    numNew = 0

    courseDF.replace("Study Abroad", "Supervised")

    for i in courseDF.index:  # through courseDF

        # print(courseDF["Students"][i])

        newNumStudents = courseDF["Students"][i]

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        itemID = createNewItem(rowData)
        if itemID is None:
            print("Failed")
            # break
            continue
        writeToReport("Adding new row", courseDF["Course"][i])
        numNew += 1
        print(f"{courseDF['Course'][i]} added as new row")


def updateExistingBoard(courseDF):
    # Just for update ---
    getIdsQuery = f'{{ boards(ids:{BOARD_ID}) {{ name items {{ name id }} }} }}'
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

        newNumStudents = courseDF["Students"][i]

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        # just for update ---
        if courseDF["Course"][i] in currBoard:
            writeToReport("Updating if needed", "")
            itemID = currBoard[courseDF["Course"][i]]
            ogNumStu = getOGNumStu(itemID)

            if ogNumStu is None:
                continue

            if updateRow(currBoard[courseDF["Course"][i]], rowData) is None:
                continue

            print(ogNumStu)

            if makeSureInRightGroup(itemID, newNumStudents, ogNumStu) is None:
                continue

            numUpdated += 1
            print(f"{courseDF['Course'][i]} matched and updated if needed")
            # ---
        else:
            itemID = createNewItem(rowData)
            if itemID is None:
                print("Failed")
                # break
                continue
            writeToReport("Adding new row", courseDF["Course"][i])
            numNew += 1
            print(f"{courseDF['Course'][i]} added as new row")


if __name__ == "__main__":

    # for dev ---
    COURSE_REPORT_FILENAME = "course-report.xlsx"
    ALLY_FILENAME = "courses.csv"

    meghanDataObj = pd.read_excel(COURSE_REPORT_FILENAME)
    meghanData = pd.DataFrame(meghanDataObj)

    allyDataObj = pd.read_csv(ALLY_FILENAME)
    allyData = pd.DataFrame(allyDataObj)

    courseDF = combineReports(meghanData, allyData)

    BOARD_ID = 3692723016  # os.environ.get('BOARD_ID')

    print("Done combining reports")
    # ---

    updateExistingBoard(courseDF)

    # for col in courseDF.columns:
    #   print(col)


