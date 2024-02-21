const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require(`./database-interaction.js`);

const app = express();
const port = 3000;

const CLIENT_URL = 'http://localhost:5173'

app.use(cors({
    origin: CLIENT_URL
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const initiateUpdate = require('./run-update.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//trigger an update
//board id
app.post('/update-now', async (req, res) => {
    res.json({result: 'success'});
    const result = await initiateUpdate(req.body.id);
    console.log(result);
    /*if (result) {
        res.json({result: 'success'});
    } else {
        res.json({result: 'failure'});
    }*/
});

//add new board information to database
//board id
//title
//ally semester ID
//update column ID
//end date
app.post('/add-board', async (req, res) => {
    const result = await database.addNewBoard(req.body);
    console.log(result);
    res.json({result: result});
});

//edit board information
//board id (required)
//title
//ally semester ID
//update column ID
//end date
app.post('/edit-board', async (req, res) => {
    const result = await database.updateBoard(req.body);
    console.log(result);
    res.json({result: result});
});

//remove board information
//board id
app.post('/delete-board', async (req, res) => {
    const result = await database.deleteBoard(req.body);
    console.log(result);
    res.json({result: result});
});

//activate board
//board id
app.post('/activate-board', async (req, res) => {
    const result = await database.changeBoardStatus(req.body, true);
    res.json({result: result});
});

//deactivate board
//board id
app.post('/deactivate-board', async (req, res) => {
    const result = await database.changeBoardStatus(req.body, false);
    res.json({result: result});
});

//get list of current boards
app.get('/get-boards', async (req, res) => {
    res.json(await database.getBoards());
});

//add maintainer email
//email, name
app.post('/add-maintainer', async (req, res) => {
    console.log(req.body);
    const result = await database.addNewMaintainer(req.body);
    res.json({result: result});
});

//remove maintainer email
//email
app.post('/delete-maintainer', async (req, res) => {
    console.log(req.body);
    const result = await database.deleteMaintainer(req.body);
    res.json({result: result});
});

//view all maintainer emails
app.get('/get-maintainers', async (req, res) => {
    res.json(await database.getMaintainers());
});


//view head maintainer email
app.get('/get-primary-maintainer', async (req, res) => {
    res.json(await database.getPrimaryMaintainer());
});

app.listen(port, () => {
    console.log(`App listening on port ${port}! 🥳`);
});



