// Link to data source
// ------- IS .js NEEDED??? -------------- ... no

var friends = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // Returns everything from friends.js as JSON-object
        res.json(friends);
    });

    //Logic to determine ideal friend will be in POST
    app.post("/api/friends", function(req, res) {

       
        // Something to hold the req body
        var request = req.body;
        console.log(request);

        // Scoring scale from 1 to 5
        // Maximum score possible - 50
        // Minimum score possible - 10

        // Placeholder values
        var idealCompanion;
        var talliedUser = 50;
        var tally;
        console.log("Working");

        // Bubble-sort?
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Matching done by lowest amount of difference
                tally = talliedUser - friends[i].scores[j];
                console.log(tally);
                if (tally < talliedUser) {
                    talliedUser = tally;
                }
                else if ((j === 9) && (tally < talliedUser)) {
                    talliedUser = tally;
                    idealCompanion = friends[i].name;
                    console.log(idealCompanion);
                    res.json(friend[i])
                }
                
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

// I cannot get the post to work, but it should return the most ideal match after running through the logic
// Once that is done, the name and picture of the match should appear on the page