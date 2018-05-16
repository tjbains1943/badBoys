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

};
