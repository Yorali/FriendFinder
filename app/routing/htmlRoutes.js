// Necessary for correct file-path procurement
var path = require('path');

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Can leave blank for default
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};
