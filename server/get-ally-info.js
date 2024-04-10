const axios = require("axios");
require("dotenv").config();

const TOKEN = process.env.ALLY_TOKEN;

const REGION = "prod.ally.ac";
const CLIENT_ID = "4";
const BASE_URL = `https://${REGION}/api/v2/clients/${CLIENT_ID}/reports`;
const METHODS_URL = `${BASE_URL}/overall`;
const ISSUES_URL = `${BASE_URL}/issues`;
const WAIT_TIME = 5 * 60000; //milliseconds - default recommended to be 1 minute

async function getAllyInfo() {
  return [
    {
      name: "This will fail",
      "Overall Ally": 10, //overallScore
      "Files Ally": 10, //filesScore
      "WYSIWYG Ally": 10, //WYSIWYGScore
      "PDF no OCR": 10, //scanned1
      "Images no Alt": 10, //imageDescription2
    },
    {
      name: "This will fail too",
      "Overall Ally": 10, //overallScore
      "Files Ally": 10, //filesScore
      "WYSIWYG Ally": 10, //WYSIWYGScore
      "PDF no OCR": 10, //scanned1
      "Images no Alt": 10, //imageDescription2
    },
    {
      name: "Spring 2024 BRONTOSAURUS-1010-001",
      "Overall Ally": 10, //overallScore
      "Files Ally": 10, //filesScore
      "WYSIWYG Ally": 10, //WYSIWYGScore
      "PDF no OCR": 10, //scanned1
      "Images no Alt": 10, //imageDescription2
    },
    {
      name: "Spring 2024 STEGOSAURUS-1010-001",
      "Overall Ally": 10, //overallScore
      "Files Ally": 10, //filesScore
      "WYSIWYG Ally": 10, //WYSIWYGScore
      "PDF no OCR": 10, //scanned1
      "Images no Alt": 10, //imageDescription2
    },
    {
      name: "Spring 2024 TRICERATOPS-1010-001",
      "Overall Ally": 10, //overallScore
      "Files Ally": 10, //filesScore
      "WYSIWYG Ally": 10, //WYSIWYGScore
      "PDF no OCR": 10, //scanned1
      "Images no Alt": 10, //imageDescription2
    },
  ];
}

/*pullAllyInfo('890')
    .then(resp => {
        console.log(resp.length);
    })*/

async function pullAllyInfo(termID) {
  return await getAllyData(termID).then((resp) => {
    const data = filterAllyData(resp.methods, resp.issues);
    return data;
  });
}

async function getAllyData(termID) {
  const [methods, issues] = await Promise.all([
    makeRequestToAlly(METHODS_URL, `termId=eq:${termID}`),
    makeRequestToAlly(ISSUES_URL, `termId=eq:${termID}`),
  ]);

  return { methods: methods.data, issues: issues.data };
}

async function makeRequestToAlly(url, params) {
  try {
    const result = await makeRequestWithBackoff(url, params);

    while (result.metadata.to + 1 < result.metadata.filteredTotal) {
      console.log(
        `We are missing ${
          result.metadata.filteredTotal - result.metadata.to
        } course(s)`
      );

      const moreResults = await makeRequestWithBackoff(
        url,
        `${params}&offset=${result.metadata.to}`
      );
      result.data = result.data.concat(moreResults.data);
      result.metadata = moreResults.metadata;
      console.log(`New metadata ${JSON.stringify(result.metadata)}`);
    }
    return result;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function makeRequestWithBackoff(url, params) {
  try {
    let result = await makeRequest(url, params);
    while (result.metadata.status === "Processing") {
      //backoff and try again
      await wait(WAIT_TIME);
      result = await makeRequest(url, params);
    }
    return result;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function makeRequest(url, params) {
  console.log(url);
  const resp = await axios.get(`${url}?${params}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  console.log(resp.data.metadata);
  console.log(resp.data.metadata.status);

  return resp.data;
}

async function wait(waitTime) {
  const throttle =
    require("promise-ratelimit")(waitTime); /* rateInMilliseconds */
  const startTime = Date.now();
  return throttle()
    .then(function () {
      console.log(Date.now() - startTime);
      return throttle();
    })
    .then(function () {
      const timePast = Date.now() - startTime;
      console.log(timePast);
      return "Done at " + timePast;
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

    const issuesIndex = issues.findIndex((obj) => obj.courseName === name);
    if (issuesIndex !== -1) {
      item["PDF no OCR"] = issues[issuesIndex].scanned1;
      item["Images no Alt"] = issues[issuesIndex].imageDescription2;

      issues.splice(issuesIndex, 1);
    }

    result.push(item);
  }

  return result;
}

module.exports = pullAllyInfo;
