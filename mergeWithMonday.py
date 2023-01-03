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
import sys

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
    data.append("new")
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

if __name__ == "__main__":
    writeToReport("mergeWithMonday.py", "")

    MONDAY_TEMPLATE_FILENAME = "mondayTemplate.xlsx"
    INDEX_100_PLUS = 2
    INDEX_50_TO_99 = 5
    INDEX_20_TO_49 = 8
    INDEX_10_TO_19 = 11
    INDEX_1_TO_9 = 14
    INDEX_NONE = 17

    NUM_STU_INDEX = 9

    beginTime = time()

    mondayTemplateObj = pd.read_excel(MONDAY_TEMPLATE_FILENAME)
    mondayTemplate = pd.DataFrame(mondayTemplateObj)

    numStu100Plus = []
    numStu50To99 = []
    numStu20To49 = []
    numStu10To19 = []
    numStu1To9 = []
    numStuNone = []

    filledFileObj = open("FilledInFile.csv")
    line = filledFileObj.readline()
    line = filledFileObj.readline()  # skip first line (header)

    while line:
        data = splitLine(line)
        writeToReport("line data", data)
        numStudents = data[NUM_STU_INDEX]
        if numStudents.isdigit():
            numStudents = int(numStudents)
        else:
            print(f"Error in {data}, the number of students is not an integer")
            writeToReport(f"Error, {data[NUM_STU_INDEX]} (numStudents) is not an integer", data)
            line = filledFileObj.readline()
            continue
        writeToReport("numStudents", data[NUM_STU_INDEX])
        data = addBlank(data)

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

        line = filledFileObj.readline()

    filledFileObj.close()

    for row in numStuNone:
        writeToReport("Inserted into monday template (none)", row)
        mondayTemplate = insertRow(INDEX_NONE, mondayTemplate, row)
    for row in numStu1To9:
        writeToReport("Inserted into monday template (1)", row)
        mondayTemplate = insertRow(INDEX_1_TO_9, mondayTemplate, row)
    for row in numStu10To19:
        writeToReport("Inserted into monday template (10)", row)
        mondayTemplate = insertRow(INDEX_10_TO_19, mondayTemplate, row)
    for row in numStu20To49:
        writeToReport("Inserted into monday template (20)", row)
        mondayTemplate = insertRow(INDEX_20_TO_49, mondayTemplate, row)
    for row in numStu50To99:
        writeToReport("Inserted into monday template (50)", row)
        mondayTemplate = insertRow(INDEX_50_TO_99, mondayTemplate, row)
    for row in numStu100Plus:
        writeToReport("Inserted into monday template (100)", row)
        mondayTemplate = insertRow(INDEX_100_PLUS, mondayTemplate, row)

    mondayTemplate.to_csv("import-to-monday.csv", index=False)

    print(f"\nDone in {time() - beginTime:.3f} seconds!", file=sys.stderr)
    writeToReport(f"Done in {time() - beginTime:.3f} seconds!", "")