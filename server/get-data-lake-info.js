
require('dotenv').config();

const ACCESS_TOKEN = process.env.PROXY_SERVER_TOKEN;

async function testDataLake() {
    const apiUrl = "https://canvasdata.accessapps.link/executeQuery";

    const data = {'query':"SELECT * FROM reporting.dli_report_course_usage_summary WHERE term_name = 'Spring 2024' LIMIT 5"}

    const options = {
        method: "post",
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(data)
    }

    const res = await fetch(apiUrl, options);
    const result = await res.json();
    console.log(result);
}

async function getDataLakeInfo() {
    return [
        {
            "Course": "This will fail",
            "URL": "hello",
            "TidyUp URL": "hello",
            "Report URL": "hello",
            "Instructor Names": "hello",
            "Email (Inst)": "hello",
            "College": "Not a real one",
            "Department": "Paleontology",
            "Delivery Method": "Face-to-Face",
            "Students": 101,
            "Overall in Use Ratio": 20,
            "Files": 10,
            "Files in Use": 10,
            "Files in Use Ratio": 20,
            "WYSIWYG": 10,
            "WYSIWYG in Use": 10,
            "Videos": 10,
            "Kaltura": 10,
            "YouTube": 10,
            "Flash": 10,
            "Broken Links": 10,
            "Nav Items": 10,
            "Files Nav": "hidden",
            "PDF": 0,
            "PDF in Use Ratio": 20,
            "Images": 0,
            "Images in Use": 20
        },
        {
            "Course": "Spring 2024 STEGOSAURUS-1010-001",
            "URL": "wow",
            "TidyUp URL": "hello",
            "Report URL": "hello",
            "Instructor Names": "hello",
            "Email (Inst)": "hello",
            "College": "Science",
            "Department": "Paleontology",
            "Delivery Method": "Face-to-Face",
            "Students": 101,
            "Overall in Use Ratio": 20,
            "Files": 10,
            "Files in Use": 10,
            "Files in Use Ratio": 20,
            "WYSIWYG": 10,
            "WYSIWYG in Use": 10,
            "Videos": 10,
            "Kaltura": 10,
            "YouTube": 10,
            "Flash": 10,
            "Broken Links": 10,
            "Nav Items": 10,
            "Files Nav": "hidden",
            "PDF": 0,
            "PDF in Use Ratio": 20,
            "Images": 0,
            "Images in Use": 20
        },
        {
            "Course": "Spring 2024 TRICERATOPS-1010-001",
            "URL": "hey there!",
            "TidyUp URL": "hello",
            "Report URL": "hello",
            "Instructor Names": "hello",
            "Email (Inst)": "hello",
            "College": "Science",
            "Department": "Paleontology",
            "Delivery Method": "Face-to-Face",
            "Students": 101,
            "Overall in Use Ratio": 20,
            "Files": 10,
            "Files in Use": 10,
            "Files in Use Ratio": 20,
            "WYSIWYG": 10,
            "WYSIWYG in Use": 10,
            "Videos": 10,
            "Kaltura": 10,
            "YouTube": 10,
            "Flash": 10,
            "Broken Links": 10,
            "Nav Items": 10,
            "Files Nav": "hidden",
            "PDF": 0,
            "PDF in Use Ratio": 20,
            "Images": 0,
            "Images in Use": 20
        },
        {
            "Course": "This will fail too",
            "URL": "hello",
            "TidyUp URL": "hello",
            "Report URL": "hello",
            "Instructor Names": "hello",
            "Email (Inst)": "hello",
            "College": "Not a real one",
            "Department": "Paleontology",
            "Delivery Method": "Face-to-Face",
            "Students": 101,
            "Overall in Use Ratio": 20,
            "Files": 10,
            "Files in Use": 10,
            "Files in Use Ratio": 20,
            "WYSIWYG": 10,
            "WYSIWYG in Use": 10,
            "Videos": 10,
            "Kaltura": 10,
            "YouTube": 10,
            "Flash": 10,
            "Broken Links": 10,
            "Nav Items": 10,
            "Files Nav": "hidden",
            "PDF": 0,
            "PDF in Use Ratio": 20,
            "Images": 0,
            "Images in Use": 20
        },
        {
            "Course": "Spring 2024 BRONTOSAURUS-1010-001",
            "URL": "wow",
            "TidyUp URL": "hello",
            "Report URL": "hello",
            "Instructor Names": "hello",
            "Email (Inst)": "hello",
            "College": "Science",
            "Department": "Paleontology",
            "Delivery Method": "Face-to-Face",
            "Students": 101,
            "Overall in Use Ratio": 20,
            "Files": 10,
            "Files in Use": 10,
            "Files in Use Ratio": 20,
            "WYSIWYG": 10,
            "WYSIWYG in Use": 10,
            "Videos": 10,
            "Kaltura": 10,
            "YouTube": 10,
            "Flash": 10,
            "Broken Links": 10,
            "Nav Items": 10,
            "Files Nav": "hidden",
            "PDF": 0,
            "PDF in Use Ratio": 20,
            "Images": 0,
            "Images in Use": 20
        }
    ]
}

module.exports = getDataLakeInfo;
