const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.ALLY_TOKEN;

const REGION= 'prod.ally.ac';
const CLIENT_ID = '4';
const BASE_URL = `https://${REGION}/api/v2/clients/${CLIENT_ID}/reports`
const METHODS_URL = `${BASE_URL}/overall`;
const ISSUES_URL = `${BASE_URL}/issues`;
const WAIT_TIME = 1000;


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

function pullAllyInfo(termID) {
    return getAllyData(termID)
        .then(resp => {
            return filterAllyData(resp.methods, resp.issues);
        });
}

//pullAllyInfo('890');

async function getAllyData(termID) {

    const methods = await makeRequestToAlly(METHODS_URL, `termId=eq:${termID}`);
    console.log(methods.metadata);

    const issues = await makeRequestToAlly(ISSUES_URL, `termId=eq:${termID}`);
    console.log(issues.metadata);

    return {methods: methods.data, issues: issues.data};
}

async function makeRequestToAlly(url, params) {

    //TODO: deal with pagination
    //TODO: deal wth processing status - backoff

    try {

        const resp = await axios.get(`${url}?${params}`, {headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        const result = resp.data;
        console.log(result);

        /*while (true/*result.metadata.status === 'Processing') {
            //backoff and try again
            await wait(WAIT_TIME);
            console.log("trying again");
            const resp = await axios.get(`${url}?${params}`, {headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            const result = resp.data;

            break;
        }*/

        if (result.metadata.to < result.metadata.filteredTotal) {
            console.log(`We are missing ${result.metadata.filteredTotal - result.metadata.to} courses`);
        }
        return result;

    } catch (err) {
        console.log(err);
        return err.message;
    }
}

async function wait(waitTime) {
    const throttle = require('promise-ratelimit')(waitTime); /* rateInMilliseconds */
    const startTime = Date.now();
    return throttle().then(function() {
        console.log(Date.now() - startTime);
        return throttle();
    })
        .then(function() {
            const timePast = Date.now() - startTime;
            console.log(timePast);
            return 'Done at ' + timePast;
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
