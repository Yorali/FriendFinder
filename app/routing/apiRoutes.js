// Link to data source
// ------- IS .js NEEDED??? --------------
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // Returns everything from friends.js as JSON-object
        res.json(friends);
    });


    //Logic to determine ideal friend will be in POST
    app.post("/api/friends", function(req, res) {
        // Something to hold the req body
        var request = req.body;

        // Scoring scale from 1 to 5
        // Maximum score possible - 50
        // Minimum score possible - 10

        // Placeholder values
        var userScore = 0;
        var idealCompanion;
        var talliedUser = 50;

        // Bubble-sort?
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Matching done by lowest amount of difference
                var tally = Math.abs(talliedUser - scores[j]);
                console.log(tally);
                
            }
            
        }


        // if (friends.length < 3) {
        //     friends.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     res.json(false);
        // }
    });

}