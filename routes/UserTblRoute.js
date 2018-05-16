var db = require("../models");

module.exports = function (app) {
    app.get("/user/:id", function (req, res) {

        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
    });

    // POST route for saving a new user
    app.post("/user/stats", function (req, res) {
        db.User.create(req.body).then(function (dbStats) {
            res.json(dbStats);
        });
    });


    // DELETE route for deleting user
    app.delete("/user/stats", function (req, res) {
        db.User.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbStats) {
            res.json(dbStats);
        });
    });


    // PUT route for updating user
    app.put("/user/stats", function (req, res) {
        db.User.update(
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
