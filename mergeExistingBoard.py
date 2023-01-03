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

import pandas as pd
from time import time
import os
import dotenv


def writeToReport(label, object):
    f = open("performanceReport3850265.txt", "a")
    f.write(f"{label}: {object}\n")
    f.close()

# ---------------------
# Title: Insert row at given position in Pandas Dataframe
# Author: Ranjan, Shubham
# 9.8.2021 (accessed 12.16.2022)
# Available at: https://www.geeksforgeeks.org/insert-row-at-given-position-in-pandas-dataframe/
def insertRow(row_number, df, row_value):
    start_upper = 0 # Starting value of upper half
    end_upper = row_number # End value of upper half
    start_lower = row_number # Start value of lower half
    end_lower = df.shape[0] # End value of lower half
    upper_half = [*range(start_upper, end_upper, 1)] # Create a list of upper_half index
    lower_half = [*range(start_lower, end_lower, 1)] # Create a list of lower_half index
    lower_half = [x.__add__(1) for x in lower_half] # Increment the value of lower half by 1
    index_ = upper_half + lower_half # Combine the two lists
    df.index = index_ # Update the index of the dataframe
    df.loc[row_number] = row_value # Insert a row at the end
    df = df.sort_index() # Sort the index labels
    return df # return the dataframe
# ---------------------

def addBlank(data):
    for x in range(22):
        data.append("")
    return data

def splitLine(line):

    newLine = line.replace("Animal, Dairy & Vet Sciences", "Animal Dairy & Vet Sciences")
    newLine = newLine.replace("Plants, Soils and Climate", "Plants Soils and Climate")
    newLine = newLine.replace("Nutrition, Dietetics &Food Sci", "Nutrition Dietetics &Food Sci")
    newLine = newLine.replace("Humanities, Arts & Social Scie", "Humanities Arts & Social Scie")

    splitData = newLine.split(",")

    if (splitData[NUM_STU_INDEX - 2] == '"Animal Dairy & Vet Sciences"'):
        splitData[NUM_STU_INDEX - 2] = "Animal, Dairy & Vet Sciences"
    elif (splitData[NUM_STU_INDEX - 2] == '"Plants Soils and Climate"'):
        splitData[NUM_STU_INDEX - 2] = 'Plants, Soils and Climate'
    elif (splitData[NUM_STU_INDEX - 2] == '"Nutrition Dietetics &Food Sci"'):
        splitData[NUM_STU_INDEX - 2] = "Nutrition, Dietetics &Food Sci"
    elif (splitData[NUM_STU_INDEX - 3] == '"Humanities Arts & Social Scie"'):
        splitData[NUM_STU_INDEX - 3] = "Humanities, Arts & Social Scie"

    return splitData

def addInCorrectPlace(numStudents, data):
    if numStudents >= 100:
        writeToReport("Added to 100 section", "^^")
        numStu100Plus.append(data)
    elif numStudents >= 50:
        writeToReport("Added to 50 section", "^^")
        numStu50To99.append(data)
    elif numStudents >= 20:
        writeToReport("Added to 20 section", "^^")
        numStu20To49.append(data)
    elif numStudents >= 10:
        writeToReport("Added to 10 section", "^^")
        numStu10To19.append(data)
    elif numStudents >= 1:
        writeToReport("Added to 1 section", "^^")
        numStu1To9.append(data)
    else:
        writeToReport("Added to 0 section", "^^")
        numStuNone.append(data)

def safeConvert(theString):
    if isinstance(theString, str):
        if theString.isdigit():
            return int(theString)
        else:
            print(f"Error, {theString} is not an integer")
            writeToReport(f"Error, {theString} is not an integer", "")
            return None
    return theString

if __name__ == "__main__":
    writeToReport("mergeExistingBoard.py", "")
    dotenv.load_dotenv(dotenv.find_dotenv())

    #EXISTING_BOARD_FILENAME = "currentFile.xlsx"
    EXISTING_BOARD_FILENAME = os.environ.get('EXISTING_BOARD_FILENAME')
    BOARD_NAME = "Name"
    ITEM_ID_COL_NAME = "Unnamed: 54"

    NUM_STU_INDEX = 9

    HEADINGS = ["Name", "URL", "TidyUp URL", "Report URL", "Instructor Names", "Email (Inst)", "College", "Department",
                "Delivery Method", "Students", "Overall in Use Ratio", "Files", "Files in Use", "Files in Use Ratio",
                "WYSIWYG", "WYSIWYG in Use", "Videos", "Kaltura", "YouTube", "Flash", "Broken Links", "Nav Items",
                "Files Nav", "Overall Ally", "Files Ally", "WYSIWYG Ally", "PDF", "PDF in Use Ratio", "PDF no OCR",
                "Images", "Images no Alt", "Images in Use"]

    OG_HEADINGS = ["Name", "URL", "TidyUp URL", "Report URL", "Instructor Names", "Email (Inst)", "College", "Department",
                "Delivery Method", "Students", "Overall in Use Ratio", "Files", "Files in Use", "Files in Use Ratio",
                "WYSIWYG", "WYSIWYG in Use", "Videos", "Kaltura", "YouTube", "Flash", "Broken Links", "Nav Items",
                "Files Nav", "Overall Ally", "Files Ally", "WYSIWYG Ally", "PDF", "PDF in Use Ratio", "PDF no OCR",
                "Images", "Images no Alt", "Images in Use"]

    beginTime = time()

    newHeadings = addBlank(HEADINGS)
    newHeadings.append("")

    existingBoardObj = pd.read_excel(EXISTING_BOARD_FILENAME, names=newHeadings)
    existingBoard = pd.DataFrame(existingBoardObj)

    numStu100Plus = []
    numStu50To99 = []
    numStu20To49 = []
    numStu10To19 = []
    numStu1To9 = []
    numStuNone = []

    filledFileObj = open("FilledInFile.csv")
    line = filledFileObj.readline()
    line = filledFileObj.readline()  # skip first line (header)

    numNew = 0
    numUpdated = 0

    while line: #through filledInFile
        data = splitLine(line)
        writeToReport("line data", data)
        newNumStudents = data[NUM_STU_INDEX]
        if newNumStudents.isdigit():
            newNumStudents = int(newNumStudents)
        else:
            print(f"Error in {data}, the number of students is not an integer")
            writeToReport(f"Error, {data[NUM_STU_INDEX]} (numStudents) is not an integer", data)
            line = filledFileObj.readline()
            continue
        writeToReport("numStudents", data[NUM_STU_INDEX])

        if data[0] in existingBoard[BOARD_NAME].values:
            writeToReport("matched in existing board to", existingBoard.index[existingBoard['Name'] == data[0]])
            ogNumStu = existingBoard.loc[existingBoard['Name'] == data[0]]["Students"].tolist()[0]
            index = existingBoard.index[existingBoard['Name'] == data[0]].tolist()[0]
            writeToReport("Index", index)
            currVal = 0
            for rightHere in OG_HEADINGS:
                existingBoard.at[index, rightHere] = data[currVal]
                currVal += 1

            writeToReport("Row edited", "")

            ogNumStu = safeConvert(ogNumStu)

            if newNumStudents != ogNumStu:
                writeToReport("Num students changed", f"{ogNumStu}->{newNumStudents}")
                row = existingBoard.loc[existingBoard['Name'] == data[0]].values.flatten().tolist()
                existingBoard = existingBoard.drop(index)
                addInCorrectPlace(newNumStudents, row)
            numUpdated += 1
        else:
            writeToReport("could not be located in existing data, creating new row", "")
            data = addBlank(data)
            data.append("new")
            addInCorrectPlace(newNumStudents, data)
            numNew += 1

        line = filledFileObj.readline()

    filledFileObj.close()

    indexNone = existingBoard.index[existingBoard['Name'] == "No Students"].tolist()[0] + 1
    for row in numStuNone:
        indexNone += 1
        writeToReport("Inserted into monday template (none)", row)
        existingBoard = insertRow(indexNone, existingBoard, row)
    index1To9 = existingBoard.index[existingBoard['Name'] == "1-9 Students"].tolist()[0] + 1
    for row in numStu1To9:
        index1To9 += 1
        writeToReport("Inserted into monday template (1)", row)
        existingBoard = insertRow(index1To9, existingBoard, row)
    index10To19 = existingBoard.index[existingBoard['Name'] == "10-19 Students"].tolist()[0] + 1
    for row in numStu10To19:
        index10To19 += 1
        writeToReport("Inserted into monday template (10)", row)
        existingBoard = insertRow(index10To19, existingBoard, row)
    index20To49 = existingBoard.index[existingBoard['Name'] == "20-49 Students"].tolist()[0] + 1
    for row in numStu20To49:
        index20To49 += 1
        writeToReport("Inserted into monday template (20)", row)
        existingBoard = insertRow(index20To49, existingBoard, row)
    index50To99 = existingBoard.index[existingBoard['Name'] == "50-99 Students"].tolist()[0] + 1
    for row in numStu50To99:
        index50To99 += 1
        writeToReport("Inserted into monday template (50)", row)
        existingBoard = insertRow(index50To99, existingBoard, row)
    index100Plus = existingBoard.index[existingBoard['Name'] == "100+ Students"].tolist()[0] + 1
    for row in numStu100Plus:
        index100Plus += 1
        writeToReport("Inserted into monday template (100)", row)
        existingBoard = insertRow(index100Plus, existingBoard, row)

    existingBoard.to_csv("import-to-monday.csv", index=False)

    print(f"{numUpdated} rows were matched and updated if necessary. {numNew} new rows were created.")
    print(f"\nDone in {time() - beginTime:.3f} seconds!")
    writeToReport(f"Done in {time() - beginTime:.3f} seconds!", "")

    os.system(f'open import-to-monday.csv')