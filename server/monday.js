const axios = require('axios');
require('dotenv').config();

const MONDAY_API_KEY = process.env.MONDAY_API_KEY;

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
            'API-Version': '2023-10',
        }
    };
    const url = 'https://api.monday.com/v2';

    const result = await postData(url, {query: query}, headers);

    let cursor = result.data.boards[0].items_page.cursor;
    let rows = result.data.boards[0].items_page.items;

    if (cursor == null) {
        return rows;
    }

    while (cursor != null) {
        let newQuery = `query { next_items_page (limit: 500, cursor: "${cursor}") { cursor items { id name } } }`;
        const result = await postData(url, {query: newQuery}, headers);
        cursor = result.data.next_items_page.cursor;
        rows = rows.concat(result.data.next_items_page.items);
    }

    return rows;
}

exports.updateExistingRow = async function (courseData) {
    console.log(`Updating row: ${courseData.name}`);
}

exports.addNewRow = async function (courseData) {
    console.log(`New row: ${courseData.name}`);
}




