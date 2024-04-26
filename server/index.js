const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

var client = path.resolve("./index.html");
console.log(client);

const database = require(`./database-interaction.js`);
const test = require(`./get-data-lake-info.js`);

const app = express();
const port = 3220;

const CLIENT_URL = "http://localhost:5173";

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "")));

function isBase64Encoded(s) {
  try {
    const decoded_data = Buffer.from(s, "base64").toString("utf-8");
    const reencoded_data = Buffer.from(decoded_data, "utf-8").toString(
      "base64"
    );
    return reencoded_data === s;
  } catch (error) {
    return false;
  }
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const initiateUpdate = require("./run-update.js");
const { getMondayId, changeStatus } = require("./monday.js");

app.get("/", async (req, res) => {
  res.sendFile(client);
});

//trigger an update
//board id
app.post("/update-now", async (req, res) => {
  res.json({ result: "success" });
  const result = await initiateUpdate(
    req.body.id,
    req.body.term,
    parseInt(req.body.allyID)
  );
  console.log(result);
});

//add new board information to database
//board id
//title
//ally semester ID
//update column ID
//end date
app.post("/add-board", async (req, res) => {
  const result = await database.addNewBoard(req.body);
  console.log(result);
  res.json({ result: result });
});

//edit board information
//board id (required)
//title
//ally semester ID
//update column ID
//end date
app.post("/edit-board", async (req, res) => {
  const result = await database.updateBoard(req.body);
  console.log(result);
  res.json({ result: result });
});

//remove board information
//board id
app.post("/delete-board", async (req, res) => {
  const result = await database.deleteBoard(req.body);
  console.log(result);
  res.json({ result: result });
});

//activate board
//board id
app.post("/activate-board", async (req, res) => {
  const result = await database.changeBoardStatus(req.body, true);
  res.json({ result: result });
});

//deactivate board
//board id
app.post("/deactivate-board", async (req, res) => {
  const result = await database.changeBoardStatus(req.body, false);
  res.json({ result: result });
});

//get list of current boards
app.get("/get-boards", async (req, res) => {
  res.json(await database.getBoards());
});

//add maintainer email
//email, name
app.post("/add-maintainer", async (req, res) => {
  console.log(req.body);
  const result = await database.addNewMaintainer(req.body);
  res.json({ result: result });
});

//remove maintainer email
//email
app.post("/delete-maintainer", async (req, res) => {
  console.log(req.body);
  const result = await database.deleteMaintainer(req.body);
  res.json({ result: result });
});

//view all maintainer emails
app.get("/get-maintainers", async (req, res) => {
  res.json(await database.getMaintainers());
});

//view head maintainer email
app.get("/get-primary-maintainer", async (req, res) => {
  res.json(await database.getPrimaryMaintainer());
});

//view issues & errors
app.get("/get-issues", async (req, res) => {
  res.json(await database.getIssues());
});

app.post("/monday", async (req, res) => {
  try {
    console.log(req.body);

    let bodyJSON;

    if (isBase64Encoded(req.body)) {
      const decoded_bytes = Buffer.from(req.body, "base64");
      const decoded_string = decoded_bytes.toString("utf-8");
      bodyJSON = JSON.parse(decoded_string);
      console.log(bodyJSON);
    } else if (typeof req.body === "object") {
      bodyJSON = req.body;
    } else {
      bodyJSON = JSON.parse(req.body);
    }

    console.log(bodyJSON);

    if (bodyJSON !== null && "event" in bodyJSON) {
      const itemID = bodyJSON["event"]["pulseId"];
      const info = await getMondayId(itemID);
      const term = bodyJSON["event"]["pulseName"];
      const boardID = bodyJSON["event"]["boardId"];
      const columnID = bodyJSON["event"]["columnId"];

      await changeStatus("Working on it", boardID, itemID, columnID);
      const result = await initiateUpdate(info[0], term, info[1]);
      await changeStatus("Done", boardID, itemID, columnID);

      const date = new Date();
      const parsed = date.toISOString();
      await changeStatus(
        { date: parsed.slice(0, 10), time: parsed.slice(11, 19) },
        boardID,
        itemID,
        "date4"
      );
    } else if (bodyJSON !== null && "challenge" in bodyJSON) {
      console.log(req.body);
      res.json(req.body);
    } else {
      res.json({
        statusCode: 200,
        body: JSON.stringify("Not a valid request"),
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}! 🥳`);
});
