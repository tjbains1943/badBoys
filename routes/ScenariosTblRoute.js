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


    app.get("/scenarios/:id", function (req, res) {

        db.Scenarios.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
    });





    // POST route for saving a new scenarios
    app.post("/scenarios/stats", function (req, res) {
        db.Scenarios.create(req.body).then(function (dbStats) {
            res.json(dbStats);
        });
    });


    // DELETE route for deleting scenarios
    app.delete("/scenarios/stats", function (req, res) {
        db.Scenarios.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbStats) {
            res.json(dbStats);
        });
    });


    // PUT route for updating scenarios
    app.put("/scenarios/stats", function (req, res) {
        db.Scenarios.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbStats) {
                res.json(dbStats);
            });
    });

};

