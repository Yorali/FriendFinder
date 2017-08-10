const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create express server
var app = express();

// Set up initial port
var PORT = process.env.PORT || 4000;

// Snagged from Hot Restaurant class app
// Allows server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Map to responding to URL user-requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT)
})