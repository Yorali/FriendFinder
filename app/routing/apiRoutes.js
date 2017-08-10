// Link to data source
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // Returns everything from friends.js as JSON-object
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        if (friends.length < 3) {
            friends.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });

}