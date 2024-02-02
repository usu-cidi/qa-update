const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.ALLY_TOKEN;

const REGION= 'prod.ally.ac';
const CLIENT_ID = '4';
const BASE_URL = `https://${REGION}/api/v2/clients/${CLIENT_ID}/reports`
const METHODS_URL = `${BASE_URL}/overall`;
const ISSUES_URL = `${BASE_URL}/issues`;


function getAllyInfo() {
    return [
        {
            name: "This will fail",
            "Overall Ally": 10, //overallScore
            "Files Ally": 10, //filesScore
            "WYSIWYG Ally": 10, //WYSIWYGScore
            "PDF no OCR": 10, //scanned1
            "Images no Alt": 10 //imageDescription2
        },
        {
            name: "This will fail too",
            "Overall Ally": 10, //overallScore
            "Files Ally": 10, //filesScore
            "WYSIWYG Ally": 10, //WYSIWYGScore
            "PDF no OCR": 10, //scanned1
            "Images no Alt": 10 //imageDescription2
        },
        {
            name: "Spring 2024 BRONTOSAURUS-1010-001",
            "Overall Ally": 10, //overallScore
            "Files Ally": 10, //filesScore
            "WYSIWYG Ally": 10, //WYSIWYGScore
            "PDF no OCR": 10, //scanned1
            "Images no Alt": 10 //imageDescription2
        },
        {
            name: "Spring 2024 STEGOSAURUS-1010-001",
            "Overall Ally": 10, //overallScore
            "Files Ally": 10, //filesScore
            "WYSIWYG Ally": 10, //WYSIWYGScore
            "PDF no OCR": 10, //scanned1
            "Images no Alt": 10 //imageDescription2
        },
        {
            name: "Spring 2024 TRICERATOPS-1010-001",
            "Overall Ally": 10, //overallScore
            "Files Ally": 10, //filesScore
            "WYSIWYG Ally": 10, //WYSIWYGScore
            "PDF no OCR": 10, //scanned1
            "Images no Alt": 10 //imageDescription2
        },
    ]
}

function pullAllyInfo(termName) {
    return getAllyData(termName)
        .then(resp => {
            return filterAllyData(resp.methods, resp.issues);
        });
}

pullAllyInfo('890');

async function getAllyData(termID) {

    const methods = await makeRequestToAlly(METHODS_URL, `termId=eq:${termID}`);
    console.log(methods.metadata);

    const issues = await makeRequestToAlly(ISSUES_URL, `termId=eq:${termID}`);
    console.log(issues.metadata);

    return {methods: methods.data, issues: issues.data};
}

function makeRequestToAlly(url, params) {
    //`${METHODS_URL}?courseName=co:${termName}`

    //TODO: deal with pagination
    //TODO: deal wth processing status - backoff

    return fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
    })
        .then(res => {
            return res.json();
        })
        .then(resp => {
            if (resp.metadata.to < resp.metadata.filteredTotal) {
                console.log(`We are missing ${resp.metadata.filteredTotal - resp.metadata.to} courses`);
            }
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err.message;
        });
}

/* Things we need from Ally
    Course name
    Overall score (overall - overallScore) -> Overall Ally
    Files score (overall - filesScore) -> Files Ally
    WYSIWYG score (overall - WYSIWYGScore) -> WYSIWYG Ally
    Scanned:1 (issues - scanned1) -> PDF no OCR
    ImageDescription:2 (issues - imageDescription2) -> Images no Alt*/

function filterAllyData(methods, issues) {
    const result = [];

    for (let i = 0; i < methods.length; i++) {
        const item = {};
        const name = methods[i].courseName;

        item.name = name;

        item["Overall Ally"] = methods[i].overallScore;
        item["Files Ally"] = methods[i].filesScore;
        item["WYSIWYG Ally"] = methods[i].WYSIWYGScore;

        const issuesIndex = issues.findIndex(obj => obj.courseName === name);
        if (issuesIndex !== -1) {
            item["PDF no OCR"] = issues[issuesIndex].scanned1;
            item["Images no Alt"] = issues[issuesIndex].imageDescription2;

            issues.splice(issuesIndex, 1);
        }

        result.push(item);
    }

    return result;
}

module.exports = getAllyInfo;
