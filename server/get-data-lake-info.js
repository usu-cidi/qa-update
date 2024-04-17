require("dotenv").config();

const ACCESS_TOKEN = process.env.PROXY_SERVER_TOKEN;

const data_mapping = {
  parent_account_name: "College",
  account_name: "Department",
  course_name: "Course",
  course_url: "URL",
  tidy_up_url: "TidyUp URL",
  report_url: "Report URL",
  course_delivery_method: "Delivery Method",
  instructor_names: "Instructor Names",
  active_student_count: "Students",
  navigation_items_count: "Nav Items",
  links_broken: "Broken Links",
  youtube_links: "YouTube",
  kaltura_links_usu: "Kaltura",
  overall_in_use_ratio: "Overall in Use Ratio",
  wysiwyg_total: "WYSIWYG",
  wysiwyg_in_use: "WYSIWYG in Use",
  files_total: "Files",
  files_in_use: "Files in Use",
  files_in_use_ratio: "Files in Use Ratio",
  image_files: "Images",
  image_files_in_use: "Images in Use",
  pdf_files: "PDF",
  pdf_files_in_use: "PDF in Use Ratio",
  video_files: "Videos",
  flash_files: "Flash",
  instructor_emails: "Email (Inst)",
};

async function testDataLake(term) {
  const apiUrl = "https://canvasdata.accessapps.link/executeQuery";

  const data = {
    query: `SELECT * FROM reporting.dli_report_course_usage_summary WHERE term_name = '${term}'`,
  };

  const options = {
    method: "post",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(apiUrl, options);
  const result = await res.json();
  //   console.log(result);
  return result;
}
// testDataLake();
// {
//     Course: "Spring 2024 STEGOSAURUS-1010-001",
//     URL: "wow",
//     "TidyUp URL": "hello",
//     "Report URL": "hello",
//     "Instructor Names": "hello",
//     "Email (Inst)": "hello",
//     College: "Science",
//     Department: "Paleontology",
//     "Delivery Method": "Face-to-Face",
//     Students: 101,
//     "Overall in Use Ratio": 20,
//     Files: 10,
//     "Files in Use": 10,
//     "Files in Use Ratio": 20,
//     WYSIWYG: 10,
//     "WYSIWYG in Use": 10,
//     Videos: 10,
//     Kaltura: 10,
//     YouTube: 10,
//     Flash: 10,
//     "Broken Links": 10,
//     "Nav Items": 10,
//     "Files Nav": "hidden",
//     PDF: 0,
//     "PDF in Use Ratio": 20,
//     Images: 0,
//     "Images in Use": 20,
//   },

// {
//     parent_account_name: "College",
//     account_name: "Department",
//     course_name: "Course",
//     course_url: "URL",
//     tidy_up_url: "TidyUp URL",
//     report_url: "Report URL",
//     course_delivery_method: "Delivery Method",
//     instructor_names: "Instructor Names",
//     active_student_count: "Students",
//     navigation_items_count: "Nav Items",
//     links_broken: "Broken Links",
//     youtube_links: "YouTube",
//     kaltura_links_usu: "Kaltura",
//     overall_in_use_ratio: "Overall in Use Ratio",
//     wysiwyg_total: "WYSIWYG",
//     wysiwyg_in_use: "WYSIWYG in Use",
//     files_total: "Files",
//     files_in_use_ratio:  "Files in Use Ratio",
//     image_files: "Images",
//     image_files_in_use: "Images in Use",
//     pdf_files: "PDF",
//     pdf_files_in_use: "PDF in Use Ratio",
//     video_files: "Videos",
//     flash_files: "Flash"
// }

async function getDataLakeInfo(term) {
  let courses = await testDataLake(term);
  let filtersCourseData = [];

  for (let i = 0; i < courses.length; i++) {
    var current_course = {};
    for (const key in courses[i]) {
      if (key in data_mapping) {
        current_course[data_mapping[key]] = courses[i][key];
      }
    }
    filtersCourseData.push(current_course);
  }

  return filtersCourseData;
  //   return [
  //     {
  //       Course: "This will fail",
  //       URL: "hello",
  //       "TidyUp URL": "hello",
  //       "Report URL": "hello",
  //       "Instructor Names": "hello",
  //       "Email (Inst)": "hello",
  //       College: "Not a real one",
  //       Department: "Paleontology",
  //       "Delivery Method": "Face-to-Face",
  //       Students: 101,
  //       "Overall in Use Ratio": 20,
  //       Files: 10,
  //       "Files in Use": 10,
  //       "Files in Use Ratio": 20,
  //       WYSIWYG: 10,
  //       "WYSIWYG in Use": 10,
  //       Videos: 10,
  //       Kaltura: 10,
  //       YouTube: 10,
  //       Flash: 10,
  //       "Broken Links": 10,
  //       "Nav Items": 10,
  //       "Files Nav": "hidden",
  //       PDF: 0,
  //       "PDF in Use Ratio": 20,
  //       Images: 0,
  //       "Images in Use": 20,
  //     },
  //     {
  //       Course: "Spring 2024 STEGOSAURUS-1010-001",
  //       URL: "wow",
  //       "TidyUp URL": "hello",
  //       "Report URL": "hello",
  //       "Instructor Names": "hello",
  //       "Email (Inst)": "hello",
  //       College: "Science",
  //       Department: "Paleontology",
  //       "Delivery Method": "Face-to-Face",
  //       Students: 101,
  //       "Overall in Use Ratio": 20,
  //       Files: 10,
  //       "Files in Use": 10,
  //       "Files in Use Ratio": 20,
  //       WYSIWYG: 10,
  //       "WYSIWYG in Use": 10,
  //       Videos: 10,
  //       Kaltura: 10,
  //       YouTube: 10,
  //       Flash: 10,
  //       "Broken Links": 10,
  //       "Nav Items": 10,
  //       "Files Nav": "hidden",
  //       PDF: 0,
  //       "PDF in Use Ratio": 20,
  //       Images: 0,
  //       "Images in Use": 20,
  //     },
  //     {
  //       Course: "Spring 2024 TRICERATOPS-1010-001",
  //       URL: "hey there!",
  //       "TidyUp URL": "hello",
  //       "Report URL": "hello",
  //       "Instructor Names": "hello",
  //       "Email (Inst)": "hello",
  //       College: "Science",
  //       Department: "Paleontology",
  //       "Delivery Method": "Face-to-Face",
  //       Students: 101,
  //       "Overall in Use Ratio": 20,
  //       Files: 10,
  //       "Files in Use": 10,
  //       "Files in Use Ratio": 20,
  //       WYSIWYG: 10,
  //       "WYSIWYG in Use": 10,
  //       Videos: 10,
  //       Kaltura: 10,
  //       YouTube: 10,
  //       Flash: 10,
  //       "Broken Links": 10,
  //       "Nav Items": 10,
  //       "Files Nav": "hidden",
  //       PDF: 0,
  //       "PDF in Use Ratio": 20,
  //       Images: 0,
  //       "Images in Use": 20,
  //     },
  //     {
  //       Course: "This will fail too",
  //       URL: "hello",
  //       "TidyUp URL": "hello",
  //       "Report URL": "hello",
  //       "Instructor Names": "hello",
  //       "Email (Inst)": "hello",
  //       College: "Not a real one",
  //       Department: "Paleontology",
  //       "Delivery Method": "Face-to-Face",
  //       Students: 101,
  //       "Overall in Use Ratio": 20,
  //       Files: 10,
  //       "Files in Use": 10,
  //       "Files in Use Ratio": 20,
  //       WYSIWYG: 10,
  //       "WYSIWYG in Use": 10,
  //       Videos: 10,
  //       Kaltura: 10,
  //       YouTube: 10,
  //       Flash: 10,
  //       "Broken Links": 10,
  //       "Nav Items": 10,
  //       "Files Nav": "hidden",
  //       PDF: 0,
  //       "PDF in Use Ratio": 20,
  //       Images: 0,
  //       "Images in Use": 20,
  //     },
  //     {
  //       Course: "Spring 2024 BRONTOSAURUS-1010-001",
  //       URL: "wow",
  //       "TidyUp URL": "hello",
  //       "Report URL": "hello",
  //       "Instructor Names": "hello",
  //       "Email (Inst)": "hello",
  //       College: "Science",
  //       Department: "Paleontology",
  //       "Delivery Method": "Face-to-Face",
  //       Students: 101,
  //       "Overall in Use Ratio": 20,
  //       Files: 10,
  //       "Files in Use": 10,
  //       "Files in Use Ratio": 20,
  //       WYSIWYG: 10,
  //       "WYSIWYG in Use": 10,
  //       Videos: 10,
  //       Kaltura: 10,
  //       YouTube: 10,
  //       Flash: 10,
  //       "Broken Links": 10,
  //       "Nav Items": 10,
  //       "Files Nav": "hidden",
  //       PDF: 0,
  //       "PDF in Use Ratio": 20,
  //       Images: 0,
  //       "Images in Use": 20,
  //     },
  //   ];
}

module.exports = getDataLakeInfo;
