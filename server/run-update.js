const getAllyInfo = require('./get-ally-info.js');
const getDataLakeInfo = require('./get-data-lake-info.js');
const mergeData = require('./merge-data.js');
const monday = require('./monday.js');
const database = require(`./database-interaction.js`);

async function initiateUpdate(boardID) {
    try {
        return await runUpdate(boardID);
    } catch (err) {
        await sendErrorEmail(err, boardID);
        return false;
    }
}

async function runUpdate(boardID) {
    console.log(boardID);

    // get the ally information
    const allyInfo = getAllyInfo();

    // get the data lake information
    const dataLakeInfo = getDataLakeInfo();

    // merge the data by course
    const courses = mergeData(allyInfo, dataLakeInfo);

    // get the monday courses
    const currentBoard = await monday.getMondayCourses(boardID);

    const rowsToAdd = [];
    const rowsToUpdate = [];

    // go through the courses with data to add
    for (let i = 0; i < courses.length; i++) {

        // if already on the board...
        let matchIndex = currentBoard.findIndex((course) => course.name === courses[i].name);
        if (matchIndex !== -1) {
            // update the row on monday
            courses[i].itemID = currentBoard[matchIndex].id;
            rowsToUpdate.push(cleanRow(courses[i]));

            // remove record from currentBoard - for search performance
            currentBoard.splice(matchIndex, 1);
        } else {
            // create new row on monday
            rowsToAdd.push(cleanRow(courses[i]));
        }
    }

    const rowsFailedToAdd = await monday.addRows(rowsToAdd, boardID);
    const rowsFailedToUpdate = await monday.updateRowBatch(rowsToUpdate, boardID);

    if (rowsFailedToAdd.length > 0 || rowsFailedToUpdate > 0) {
        //send an issue email to the maintainer emails
        await sendIssueEmail(rowsFailedToAdd, rowsFailedToUpdate, boardID);

        //update issues with last update in database
    }

    //update date of last update in database

    return true;
}

async function sendIssueEmail(failedToAdd, failedToUpdate, boardID) {
    const subject = 'QA Update Issue Report';
    const headMaintainer = await database.getHeadMaintainer();

    let message = `USU's QA Update Tool encountered an issue adding/updating 
    courses on the QA board with the ID ${boardID} on monday.com.\n\n
    
    The following courses failed to add to the board:\n
    ${formatCourseList(failedToAdd)}\n\n
    
    The following courses failed to update on the board:\n
    ${formatCourseList(failedToUpdate)}\n\n
    
    You're receiving this email because you are listed as a maintainer for the QA Update tool.
    If you wish to be removed from this list, please contact ${headMaintainer}`;

    await sendMaintainerEmail(message, subject);
}

function formatCourseList(courses) {
    let result = "";
    for (let i = 0; i < courses.length; i++) {
        result += `* ${courses[i].name}: ${JSON.stringify(courses[i].error)}\n`
    }
    return result;
}

async function sendErrorEmail(error, boardID) {
    const subject = 'QA Update Error Report';
    const headMaintainer = await database.getHeadMaintainer();

    let message = `USU's QA Update Tool encountered an error updating
     the QA board with the ID ${boardID} on monday.com, causing the process to fail
     with the following error:\n
     
     ${error}\n\n
    
    You're receiving this email because you are listed as a maintainer for the QA Update tool.
    If you wish to be removed from this list, please contact ${headMaintainer}`;

    await sendMaintainerEmail(message, subject);
}

async function sendMaintainerEmail(message, subject) {
    //get maintainer emails from database
    const maintainers = await database.getMaintainerEmails();

    //send message to all of them
    for (let i = 0; i < maintainers.length; i++) {
        await sendEmail(message, subject, maintainers[i]);
    }
}

async function sendEmail(message, subject, recipient) {
    console.log(`Sending ${message} with subject ${subject} to ${recipient}`);
    return true;
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

initiateUpdate(3779195138);

module.exports = initiateUpdate;
