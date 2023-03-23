var timeout;

async function getStatus() {

  let get;

  try {
    const res = await fetch("/status");
    get = await res.json();
  } catch (e) {
    console.error("Error: ", e);
  }

  document.getElementById("innerStatus").innerHTML = get.status * 10 + "&percnt;";

  if (get.status == 7){
    document.getElementById("innerStatus").innerHTML += " Complete";
    clearTimeout(timeout);
    return false;
  }

  timeout = setTimeout(getStatus, 1000);
}

getStatus();
