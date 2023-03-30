var timeout;

async function getStatus() {

  let get;

  try {
    const res = await fetch("/linkStatus");
    get = await res.json();
  } catch (e) {
    console.error("Error: ", e);
  }

  if (get.status === "inactive") {
      clearTimeout(timeout);
      return false;
  }

  if (get.status !== "") {
      let theLink = document.createElement("a");
      theLink.text = "Click here to download the Ally course information file!";
      theLink.href = get.status;

      document.getElementById("status-marker").remove();

      let theDiv = document.getElementById("ally-box");
      theDiv.appendChild(theLink);


      clearTimeout(timeout);
      return false;
  }

  timeout = setTimeout(getStatus, 1000);
}

getStatus()
