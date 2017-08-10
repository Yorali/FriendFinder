app.get("/survey", function(req, res) {
    res.render("survey");
});

app.use("/", function(req, res, next) {
    res.render("home");
});

app.listen(4000)