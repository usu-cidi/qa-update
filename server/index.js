const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const CLIENT_URL = 'http://localhost:5173'

app.use(cors({
    origin: CLIENT_URL
}));

const initiateUpdate = require('./run-update.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//trigger an update
//board id
app.post('/update-now', async (req, res) => {
    res.json({result: 'success'});
    console.log(req.body);
    //const result = await initiateUpdate(3779195138);
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

//edit board information
//board id (required)
//title (optional)
//ally semester ID (optional)
//update column ID (optional)
//end date (optional)

//remove board information
//board id

//activate board
//board id

//deactivate board
//board id

//get list of current boards
app.get('/get-boards', (req, res) => {
    res.json([
        {
            name: 'Spring 2024',
            mondayId: '54321',
            updateColId: '54321',
            allySemId: '123',
            endDate: '05/01/2024',
            lastUpdated: '01/28/2024',
            active: true,
        }, {
            name: 'Fall 2023',
            mondayId: '54321',
            updateColId: '54321',
            allySemId: '123',
            endDate: '05/01/2024',
            lastUpdated: '01/28/2024',
            active: false
        },
        {
            name: 'Summer 2024',
            mondayId: '54321',
            updateColId: '54321',
            allySemId: '123',
            endDate: '05/01/2024',
            lastUpdated: '01/28/2024',
            active: true,
        }
    ]);
});

//add maintainer email
//email, name

//remove maintainer email
//email

//view all maintainer emails
app.get('/get-maintainers', (req, res) => {
    res.json([
        {
            name: 'Emma Lynn',
            email: 'email@email.com',
            primary: true,
        }, {
            name: 'Maddi May',
            email: 'email@email.com',
            primary: false,
        },
        {
            name: 'Percy the Shark',
            email: 'email@email.com',
            primary: false,
        }
    ]);
});

//edit head maintainer email

//view head maintainer email

app.listen(port, () => {
    console.log(`App listening on port ${port}! 🥳`);
});



