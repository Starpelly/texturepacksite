// Importing required modules
const cors = require('cors');
const express = require('express');

// parse env variables
require('dotenv').config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

app.set('trust proxy', 1);
 
// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('json spaces', 2);

// Static folder
app.use(express.static(__dirname + '/views/'));

//  apply to all requests
// app.use(limiter);

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/requests', require('./routes/requests' ));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
