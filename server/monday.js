const axios = require('axios');
require('dotenv').config();

const MONDAY_API_KEY = process.env.MONDAY_API_KEY;
const URL = 'https://api.monday.com/v2';
const API_VERSION = '2023-10';
const GROUP_IDS = ["new_group659", "new_group84060", "new_group63769", "new_group69712", "new_group", "new_group7956"];
const GROUP_CUTOFFS = [100, 50, 20, 10, 1, 0];
const BATCH_SIZE = 2;

function formatColumnVals(row) {
    return {
        "text8": row["URL"],
        "text67": row["TidyUp URL"],
        "text83": row["Report URL"],
        "text": row["Instructor Names"],
        "text6": row["Email (Inst)"],
        "status4": row["College"],
        "status35": row["Department"],
        "status8": row["Delivery Method"],
        "__of_students": row["Students"],
        "__content_in_use": row["Overall in Use Ratio"],
        "files_total": row["Files"],
        "files_with_link": row["Files in Use"],
        "files___in_use": row["Files in Use Ratio"],
        "wysiwyg_content": row["WYSIWYG"],
        "wysiwyg_in_use": row["WYSIWYG in Use"],
        "videos": row["Videos"],
        "kaltura_vids": row["Kaltura"],
        "youtube": row["YouTube"],
        "flash_content": row["Flash"],
        "broken_links": row["Broken Links"],
        "navigation_items": row["Nav Items"],
        "status48": row["Files Nav"],
        "overall_a11y_score": row["Overall Ally"],
        "files_ally_score": row["Files Ally"],
        "wysiwyg_ally_score": row["WYSIWYG Ally"],
        "__of_pdf_files": row["PDF"],
        "pdf_files_in_use": row["PDF in Use Ratio"],
        "pdf_scanned_not_ocr_d": row["PDF no OCR"],
        "images": row["Images"],
        "images_wo_alt_text": row["Images no Alt"],
        "numbers": row["Images in Use"]
    };
}

async function postData(url, data, headers) {
    return axios.post(url, data, headers)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

exports.getMondayCourses = async function (boardId) {

    let query = `query { boards (ids: ${boardId}) { `;
    query += `items_page (limit: 500) { cursor items { id name } } } }`;
    const headers = {
        headers: {
            Authorization: MONDAY_API_KEY,
            'Content-Type': 'application/json',
            'API-Version': API_VERSION,
        }
    };

    const result = await postData(URL, {query: query}, headers);

    let cursor = result.data.boards[0].items_page.cursor;
    let rows = result.data.boards[0].items_page.items;

    if (cursor == null) {
        return rows;
    }

    while (cursor != null) {
        let newQuery = `query { next_items_page (limit: 500, cursor: "${cursor}") { cursor items { id name } } }`;
        const result = await postData(URL, {query: newQuery}, headers);
        cursor = result.data.next_items_page.cursor;
        rows = rows.concat(result.data.next_items_page.items);
    }

    return rows;
}

exports.addRows = async function (rowsToAdd, boardId) {

    let failedToAdd = [];

    for (let i = 0; i < rowsToAdd.length / BATCH_SIZE; i++) {
        let thisSection;

        if (((i * BATCH_SIZE) + BATCH_SIZE - 1) < rowsToAdd.length) {
            thisSection = rowsToAdd.slice((i * BATCH_SIZE), (i * BATCH_SIZE) + BATCH_SIZE);
        } else {
            thisSection = rowsToAdd.slice(i * BATCH_SIZE);
        }

        const batchAddResult = await addNewRowBatch(thisSection, boardId);

        if (batchAddResult.error_code !== undefined) {
            console.log("There was an error so we'll do each one individually");
            for (let j = 0; j < thisSection.length; j++) {
                const result = await addOneRow(thisSection[j], boardId);

                if (result.error_code !== undefined) {
                    thisSection[j].error = result;
                    failedToAdd.push(thisSection[j]);
                }
            }
        }
    }

    return failedToAdd;
}


addOneRow = async function (courseData, boardId) {
    console.log(`Adding ${courseData.name} individually`);

    //get group ID
    const groupID = findGroupID(courseData['Students']);

    //add to query
    const queryMiddle = `createItem: create_item (board_id:${boardId}, group_id: "${groupID}", 
        item_name:$myItemName, column_values:$columnVals) { id } `

    const queryVars = `$myItemName: String!, $columnVals: JSON!, `;

    //format column values
    const row = formatColumnVals(courseData);

    //add to query variables
    let theVars = {
        "myItemName": courseData.name,
        "columnVals": JSON.stringify(row)
    };

    let query = `mutation (${queryVars}) { ${queryMiddle} }`;

    const headers = {
        headers: {
            Authorization: MONDAY_API_KEY,
            'Content-Type': 'application/json',
            'API-Version': API_VERSION,
        }
    };

    return await postData(URL, {query: query, variables: theVars}, headers);
}

updateOneRow = async function (courseData, boardId) {
    console.log(`Updating ${courseData.name} individually`);

    //add to query
    let queryMiddle = `updateItem: change_multiple_column_values (board_id:${boardId}, 
        item_id:${courseData.itemID}, column_values:$columnVals) { id } `;

    let queryVars = `$columnVals: JSON!, `;

    //format column values
    const row = formatColumnVals(courseData);

    //add to query variables
    let theVars = {
        "columnVals": JSON.stringify(row)
    };

    let query = `mutation (${queryVars}) { ${queryMiddle} }`;

    const headers = {
        headers: {
            Authorization: MONDAY_API_KEY,
            'Content-Type': 'application/json',
            'API-Version': API_VERSION,
        }
    };

    return await postData(URL, {query: query, variables: theVars}, headers);
}

addNewRowBatch = async function (rowsToAdd, boardId) {
    console.log(`Adding ${rowsToAdd.length} new rows`);

    let queryMiddle = '';
    let queryVars = '';
    let theVars = {};

    for (let i = 0; i < rowsToAdd.length; i++) {
        //get group ID
        const groupID = findGroupID(rowsToAdd[i]['Students']);

        //add to query
        queryMiddle += `createItem${i}: create_item (board_id:${boardId}, group_id: "${groupID}", 
        item_name:$myItemName${i}, column_values:$columnVals${i}) { id } `

        queryVars += `$myItemName${i}: String!, $columnVals${i}: JSON!, `;

        //format column values
        const row = formatColumnVals(rowsToAdd[i]);

        //add to query variables
        theVars[`myItemName${i}`] = rowsToAdd[i].name;
        theVars[`columnVals${i}`] = JSON.stringify(row);
    }

    let query = `mutation (${queryVars}) { ${queryMiddle} }`;

    const headers = {
        headers: {
            Authorization: MONDAY_API_KEY,
            'Content-Type': 'application/json',
            'API-Version': API_VERSION,
        }
    };

    return await postData(URL, {query: query, variables: theVars}, headers);
}

exports.updateRows = async function (rowsToUpdate, boardId) {
    let failedToUpdate = [];

    for (let i = 0; i < rowsToUpdate.length / BATCH_SIZE; i++) {
        let thisSection;

        if (((i * BATCH_SIZE) + BATCH_SIZE - 1) < rowsToUpdate.length) {
            thisSection = rowsToUpdate.slice((i * BATCH_SIZE), (i * BATCH_SIZE) + BATCH_SIZE);
        } else {
            thisSection = rowsToUpdate.slice(i * BATCH_SIZE);
        }

        const batchAddResult = await updateRowBatch(thisSection, boardId);
        console.log(batchAddResult);

        if (batchAddResult.error_code !== undefined) {
            console.log("There was an error so we'll do each one individually");
            for (let j = 0; j < thisSection.length; j++) {
                const result = await updateOneRow(thisSection[j], boardId);

                if (result.error_code !== undefined) {
                    thisSection[j].error = result;
                    failedToUpdate.push(thisSection[j]);
                }
            }
        }
    }

    return failedToUpdate;
}

updateRowBatch = async function (rowsToUpdate, boardId) {
    console.log(`Updating ${rowsToUpdate.length} rows`);

    let queryMiddle = '';
    let queryVars = '';
    let theVars = {};

    for (let i = 0; i < rowsToUpdate.length; i++) {

        //add to query
        queryMiddle += `updateItem${i}: change_multiple_column_values (board_id:${boardId}, 
        item_id:${rowsToUpdate[i].itemID}, column_values:$columnVals${i}) { id } `

        queryVars += `$columnVals${i}: JSON!, `;

        //format column values
        const row = formatColumnVals(rowsToUpdate[i]);

        //add to query variables
        theVars[`columnVals${i}`] = JSON.stringify(row);
    }

    let query = `mutation (${queryVars}) { ${queryMiddle} }`;

    const headers = {
        headers: {
            Authorization: MONDAY_API_KEY,
            'Content-Type': 'application/json',
            'API-Version': API_VERSION,
        }
    };

    return await postData(URL, {query: query, variables: theVars}, headers);
}

function findGroupID(numStu) {
    for (let i = 0; i < GROUP_CUTOFFS.length; i++) {
        if (parseInt(numStu) >= GROUP_CUTOFFS[i]) {
            return GROUP_IDS[i];
        }
    }
    return GROUP_IDS[GROUP_IDS.length];
}




