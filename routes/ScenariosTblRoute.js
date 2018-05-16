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

    // GET route for getting all of the posts
    app.get("/api/Scenarios", function (req, res) {
        var query = {};
        if (req.query.SId) {
            query.SId = req.query.SId;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Scenario.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbScenario) {
            res.json(dbScenario);
        });
    });
    /*
        // Get route for retrieving a single post
        app.get("/api/posts/:id", function (req, res) {
            // Here we add an "include" property to our options in our findOne query
            // We set the value to an array of the models we want to include in a left outer join
            // In this case, just db.Author
            db.Post.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Author]
            }).then(function (dbPost) {
                res.json(dbPost);
            });
        });
    
        // POST route for saving a new post
        app.post("/api/posts", function (req, res) {
            db.Post.create(req.body).then(function (dbPost) {
                res.json(dbPost);
            });
        });
    
        // DELETE route for deleting posts
        app.delete("/api/posts/:id", function (req, res) {
            db.Post.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
        });
    
        // PUT route for updating posts
        app.put("/api/posts", function (req, res) {
            db.Post.update(
                req.body,
                {
                    where: {
                        id: req.body.id
                    }
                }).then(function (dbPost) {
                    res.json(dbPost);
                });
        });
        */
};

