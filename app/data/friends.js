var friends = 
[
    {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
        ]
    }
]

// Put elsewhere --from class
app.post(/friends, req, res) {
    var bestFriend = {
        name: '',
        photo: '',
        difference: 0
    }

    var me = req.body;
    me.scpres
    loop through db of friends {
        var totaldiff = 0;
        var currentFriend = friends[i]
        var j = 0; loop through scores  currecntFriend.scores j++
        currentfriendscore = currentFriends.scores[j];
        me.scores
        totaldiff = Abs(currentfriendscore - me.score)
        // find closest friend
        if (totaldiff < bestFriend.difference) // True first time
            bestFriend.name = currentfriend.name
    }
    res.json(bestfriend)
}