var db = require("../models");

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

    app.post("/user", function (req, res) {
        db.Users.create(req.body).then(function (data) {
            res.json(data);
        });
    });

    app.post("/login", function (req, res) {
        db.Users.findOne({
            where: {
                userName: req.body.userName,
                password: req.body.password
            }
        }).then(function (data) {
            res.json(data);
        });
    });

    app.post("/stats", function (req, res) {
        db.ScenarioStats.create(req.body).then(function (data) {
            res.json(data);
        });
    });

    app.get("/stats/:search", function (req, res) {

        db.Users.findAll({
            where: {
                userName: req.params.search
            },
            include: [{
                model: db.ScenarioStats
            }]
        }).then(function (data) {
            res.json(data);
        });
    });

    app.get("/statss/:class", function (req, res) {

        db.Users.findAll({
            where: {
                ClassID: req.params.class
            },
            include: [{
                model: db.ScenarioStats
            }]
        }).then(function (data) {
            res.json(data);
        });
    });

};
