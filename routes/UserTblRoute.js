var db = require("../models");
/*
module.exports = function (app) {
    app.post("/api/statistics", function (req, res) {

        db.User.create({ username: req.body }).then(function (dbUser) { res.json(dbUser) });
    });

    app.post("/api/login", function (req, res) { });

    app.get("/api/scenarios", function (req, res) { });

    app.post("/api/runtime", function (req, res) { });
    app.get("/api/login", function (req, res) {
        console.log("running");
        res.json({ one: "1" });
    });

    app.get("/api/admin", function (req, res) { });

    app.get("/api/runtime", function (req, res) { });
};
*/
module.exports = function (app) {
    app.get("/api/admin", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.User.findAll({
            include: [db.Scenarios]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    /*
        app.get("/api/authors/:id", function (req, res) {
            // Here we add an "include" property to our options in our findOne query
            // We set the value to an array of the models we want to include in a left outer join
            // In this case, just db.Post
            db.Author.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Post]
            }).then(function (dbAuthor) {
                res.json(dbAuthor);
            });
        });
    
        app.post("/api/authors", function (req, res) {
            db.Author.create(req.body).then(function (dbAuthor) {
                res.json(dbAuthor);
            });
        });
    
        app.delete("/api/authors/:id", function (req, res) {
            db.Author.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbAuthor) {
                res.json(dbAuthor);
            });
        });
    */
};
