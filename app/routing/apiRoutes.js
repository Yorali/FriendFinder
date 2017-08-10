app.get("/api/friends", function(req, res) {
    res.render("survey");
});

app.use("/home", function(req, res, next) {
    res.render("home");
});

app.listen(4000)