import requests
import json
from combineData import combineReports
import pandas as pd
from datetime import date

API_URL = "https://api.monday.com/v2"
NUM_STU_INDEX = 9
# 9: number of students index - from Meghan's file

COL_IDS = ["text8", "text67", "text83", "text", "text6", "status4", "status35", "status8", "__of_students",
           "__content_in_use",
           "files_total", "files_with_link", "files___in_use", "wysiwyg_content", "wysiwyg_in_use", "videos",
           "kaltura_vids", "youtube", "flash_content", "broken_links", "navigation_items", "status48",
           "overall_a11y_score",
           "files_ally_score", "wysiwyg_ally_score", "__of_pdf_files", "pdf_files_in_use", "pdf_scanned_not_ocr_d",
           "images", "images_wo_alt_text", "numbers"
            #, "status_15", "date"
            ]
# "status_15": trigger column - DEV, "status_12": Summer 2023, "status_13": Fall 2023
# "date": last updated column - DEV - same in Summer 2023 & Fall 2023

BOARD_IDS = {"3692723016": "Dev", "4330918867": "Summer 2023", "4330926569": "Fall 2023"}

SMALL_COL_IDS = [
    #"status_15", "date"
    ]
# "status_15": trigger column - DEV, "status_12": Summer 2023, "status_13": Fall 2023
# "date": last updated column - DEV - same in Summer 2023 & Fall 2023

GROUP_IDS = {100: "new_group659", 50: "new_group84060", 20: "new_group63769", 10: "new_group69712", 1: "new_group",
             0: "new_group7956"}

def updateColIds(boardId):
    if boardId not in BOARD_IDS:
        raise Exception(f"{boardId} is not a recognized board ID. "
                        f"The boards currently registered are Summer 2023 and Fall 2023.")
    boardName = BOARD_IDS[boardId]
    if boardName == "Dev":
        COL_IDS.append("status_15")
        SMALL_COL_IDS.append("status_15")
    elif boardName == "Summer 2023":
        COL_IDS.append("status_12")
        SMALL_COL_IDS.append("status_15")
    elif boardName == "Fall 2023":
        COL_IDS.append("status_13")
        SMALL_COL_IDS.append("status_15")
    else:
        raise Exception(f"{boardId} is not a recognized board ID. "
                        f"The boards currently registered are Summer 2023 and Fall 2023.")
    COL_IDS.append("date")
    SMALL_COL_IDS.append("date")


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
            return GROUP_IDS[lowerLimit]
    return GROUP_IDS[0]


def createNewItem(rowInfo, boardId, HEADERS):
    #print(f"Looking at {rowInfo[NUM_STU_INDEX]}")
    groupID = findGroupID(rowInfo[NUM_STU_INDEX])
    query = f'mutation ($myItemName: String!, $columnVals: JSON!) ' \
            f'{{ create_item (board_id:{boardId}, group_id:{groupID}, ' \
            f'item_name:$myItemName, column_values:$columnVals) {{ id }} }}'

    rowInfo.append("Updated")
    rowInfo.append(date.today())

    colVals = dict(zip(COL_IDS, rowInfo[1:]))
    vars = {
        'myItemName': rowInfo[0],
        'columnVals': json.dumps(colVals, default=str)
    }

    #print(vars)

    data = {'query': query, 'variables': vars}
    r = requests.post(url=API_URL, json=data, headers=HEADERS)  # make request

    try:
        return r.json()["data"]["create_item"]["id"]
    except Exception as e:
        print(f":( error when creating new row {e}")
        print(r.json())
        return None

def updateRow(itemID, rowInfo, boardId, HEADERS):
    query = f'mutation ($columnVals: JSON!) {{ change_multiple_column_values (board_id:{boardId}, item_id: {itemID}, column_values:$columnVals) {{ name id }} }}'

    rowInfo.append("Updated")
    rowInfo.append(date.today())

    colVals = dict(zip(COL_IDS, rowInfo[1:]))
    vars = {
        'columnVals': json.dumps(colVals, default=str)
    }

    data = {'query': query, 'variables': vars}

    r = requests.post(url=API_URL, json=data, headers=HEADERS)  # make request
    try:
        return r.json()["data"]["change_multiple_column_values"]["id"]
    except Exception as e:
        print(f":(( Error updating row {e}")
        print(r.json())
        return None


def removeNaN(rowData):
    for item in range(len(rowData)):
        if pd.isna(rowData[item]):
            rowData[item] = ""
    return rowData


def fillNewBoard(courseDF, boardId, mondayAPIKey):
    updateColIds(boardId)

    HEADERS = {"Authorization": mondayAPIKey}
    numNew = 0

    courseDF.replace("Study Abroad", "Supervised")

    for i in courseDF.index:  # through courseDF

        newNumStudents = courseDF["Students"][i]

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        if "Study Abroad" in rowData:
            print("Replacing 'Study Abroad' with 'Supervised'.")
            rowData[rowData.index("Study Abroad")] = "Supervised"

        itemID = createNewItem(rowData, boardId, HEADERS)
        if itemID is None:
            print("Failed")
            # break
            continue
        numNew += 1
        print(f"{courseDF['Course'][i]} added as new row")

    return numNew


def updateExistingBoard(courseDF, boardId, mondayAPIKey):
    updateColIds(boardId)

    HEADERS = {"Authorization": mondayAPIKey}

    # Just for update ---

    getIdsQuery = f'{{ boards(ids:{boardId}) {{ name items {{ name id }} }} }}'
    data = {'query': getIdsQuery}

    r = requests.post(url=API_URL, json=data, headers=HEADERS)
    jsonObj = json.loads(r.content)

    currBoard = {}
    for theRow in jsonObj["data"]["boards"][0]["items"]:
        currBoard[theRow["name"]] = theRow["id"]

    # ---

    numNew = 0
    numUpdated = 0  # just for update

    courseDF.replace("Study Abroad", "Supervised")

    for i in courseDF.index:  # through courseDF

        rowData = courseDF.iloc[i].values.tolist()
        rowData = removeNaN(rowData)

        if "Study Abroad" in rowData:
            print("Replacing 'Study Abroad' with 'Supervised'.")
            rowData[rowData.index("Study Abroad")] = "Supervised"

        # just for update ---
        if courseDF["Course"][i] in currBoard:
            itemID = currBoard[courseDF["Course"][i]]

            if updateRow(currBoard[courseDF["Course"][i]], rowData, boardId, HEADERS) is None:
                continue

            numUpdated += 1
            print(f"{courseDF['Course'][i]} matched and updated if needed")
            # ---
        else:
            itemID = createNewItem(rowData, boardId, HEADERS)
            if itemID is None:
                print("Failed")
                # break
                continue
            numNew += 1
            print(f"{courseDF['Course'][i]} added as new row")

    return [numNew, numUpdated]


