const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();
const port = 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Tic-Tac-Toe Data Base application."});
});

require('./app/routes/ScoreBoard.routes.js')(app);
require('./app/routes/GameBoard.routes.js')(app);


// listen for requests
app.listen(port, () => {
    console.log(`Tic-Tac-Toe Server is listening on port ${port}`);
});
