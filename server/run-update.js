const getAllyInfo = require('./get-ally-info.js');
const getDataLakeInfo = require('./get-data-lake-info.js');
const mergeData = require('./merge-data.js');
const monday = require('./monday.js');

async function runUpdate(boardID) {
    console.log(boardID);

    // get the ally information
    const allyInfo = getAllyInfo();

    // get the data lake information
    const dataLakeInfo = getDataLakeInfo();

    // merge the data by course
    const courses = mergeData(allyInfo, dataLakeInfo);
    console.log(courses);

    // get the monday courses
    const currentBoard = await monday.getMondayCourses(boardID);
    console.log(currentBoard);

    // go through the courses with data to add
    for (let i = 0; i < courses.length; i++) {

        try {
            // if already on the board
            let matchIndex = currentBoard.findIndex((course) => course.name === courses[i].name);
            if (matchIndex !== -1) {
                // update the row on monday
                const result = await monday.updateExistingRow(cleanRow(courses[i]));
                // remove record from currentBoard - for search performance
                currentBoard.splice(matchIndex, 1);
            } else {
                // create new row on monday
                const result = await monday.addNewRow(cleanRow(courses[i]));
            }
        } catch (e) {
            // if failed, add to list to send in error email to maintainer
        }
    }
}

function cleanRow(row) {

    //"Study Abroad" -> "Supervised"
    if (row["Delivery Method"] === "Study Abroad") {
        row["Delivery Method"] = "Supervised";
    }
    //"Disability Resource Center" -> "University"
    if (row["College"] === "Disability Resource Center") {
        row["College"] = "University";
    }

    return row;
}

runUpdate(3779195138);

module.exports = runUpdate;
