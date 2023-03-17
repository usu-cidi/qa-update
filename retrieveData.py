from talkToBox import getDataFromBox
from combineData import combineReports

if __name__ == "__main__":
    testFileId = '1166450429279'
    allyFolderId = '199422418677'
    allyFileName = 'courses.csv'

    #boxData = getDataFromBox(testFileId)
    #print(boxData.to_string())

    allyData = getDataFromBox('1167467551435', "csv")
    courseReportData = getDataFromBox('1158649874756', 'excel')

    completeReport = combineReports(courseReportData, allyData)
    print(completeReport.to_string())

