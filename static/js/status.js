var timeout;

async function getStatus() {

  let get;

  try {
    const res = await fetch("/status");
    get = await res.json();
  } catch (e) {
    console.error("Error: ", e);
  }

  console.log("inactive");

  if (get.status === "error1") {
      clearTimeout(timeout);
      document.getElementById("innerStatus").innerHTML = "Update failed - " +
          "error getting course report file from Box. Please verify the file ID is correct and that " +
          "your account has permission to access it. If that doesn't work, contact your site administrator.";
      return false;
  }
  if (get.status === "error2") {
      clearTimeout(timeout);
      document.getElementById("innerStatus").innerHTML = "Update Failed. " +
          "Error getting merging Ally and Course Reports. Please verify that the correct files have been uploaded/specified. " +
          "If that doesn't work, contact your site administrator.";
      return false;
  }
  if (get.status === "error3") {
      clearTimeout(timeout);
      document.getElementById("innerStatus").innerHTML = "Update failed. " +
          "Error updating the monday board. Please contact your site administrator.";
      return false;
  }

  if (get.status === "inactive") {
      clearTimeout(timeout);
      document.getElementById("innerStatus").innerHTML = "Update inactive.";
      return false;
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
