const SERVER_URL = "http://applications.accessapps.link:3220/";

async function postData(url, data, contentType = "application/json") {
  return fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    connection: "keep-alive",
    headers: {
      Accept: "application.json",
      "Content-Type": contentType,
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((obj) => {
      return obj;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { SERVER_URL, postData };
