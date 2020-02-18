// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3523;

const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

//After this help from Jeff 

//Add GET route that returns the projectData object in your server code.

// GET method route
app.get('/', function (req, res) {
    res.send(projectData);
  })

  //POST route that adds incoming data to projectData.
  
  // POST method route
  app.post('/', function (req, res) {
    res.send(projectData);
  })

  //Make sure your POST route is setup to add each of these values with a key to projectData.