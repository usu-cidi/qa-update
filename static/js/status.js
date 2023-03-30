var timeout;

async function getStatus() {

  let get;

  try {
    const res = await fetch("/status");
    get = await res.json();
  } catch (e) {
    console.error("Error: ", e);
  }

  console.log("Updating the progress bar!! " + get.status)
  document.getElementById("innerStatus").innerHTML = get.status * 10 + "&percnt;";
  for (let i = 0; i < get.status; i++) {
    document.getElementById("prog" + i).classList = "inner-box visible"
  }

  if (get.status === 10) {
    document.getElementById("innerStatus").innerHTML += " Complete";
    clearTimeout(timeout);
    return false;
  }

  timeout = setTimeout(getStatus, 5000);
}

function endUpdate() {
  document.getElementById("innerStatus").innerHTML = "Process halted in an incomplete state";
  clearTimeout(timeout);
  return false;
}

getStatus();
