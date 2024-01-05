const express = require('express')
const app = express()
const port = 3000

const runUpdate = require('./run-update.js');

app.get('/', (req, res) => {
    runUpdate(1234);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

//trigger an update
    //board id

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

//activate board updates
    //board id

//deactivate board updates
    //board id

//get list of current boards

//add maintainer email
    //email

//remove maintainer email
    //email

//view all maintainer emails



