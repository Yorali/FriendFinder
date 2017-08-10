const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

var PORT = 4000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT)
})