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
def combineReports(courseDataFrame, allyDataFrame):

    allyDict = {}

    allyCourses = allyDataFrame["Course name"]
    for i in range(0, len(allyCourses)):  # through Ally data
        courseInfo = [allyDataFrame["Overall score"][i], allyDataFrame["Files score"][i], allyDataFrame["WYSIWYG score"][i],
                      allyDataFrame["Scanned:1"][i], allyDataFrame["ImageDescription:2"][i]]
        allyDict[allyCourses[i]] = courseInfo

    courseNames = courseDataFrame["Course"]

    for i in range(0, len(courseNames)):  # through Meghan's data
        try:
            allyInfo = allyDict[courseNames[i]]
            courseDataFrame.loc[i, ["Overall Ally", "Files Ally", "WYSIWYG Ally", "PDF no OCR", "Images no Alt"]] = allyInfo
            # print(f"Successfully matched {courseNames[i]}")
            #writeToReport("Successfully matched", courseNames[i])
        except KeyError:
            print(f"{courseNames[i]} could not be matched in the ally file.")
        except Exception as e:
            print(f"Error in {courseNames[i]}: {e}")

    return courseDataFrame