
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config()
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
require("./routes/table-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: true,
  logging: console.log
}).then(function () {

  db.Scenarios.bulkCreate([
    {
      scenarioBG: "../images/scenarios/house/house.jpg",
      scenarioIMG: ["../images/scenarios/house/burgYellow.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/mall/mall.jpg",
      scenarioIMG: ["../images/scenarios/mall/activeShooter.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/store/store.jpg",
      scenarioIMG: ["../images/scenarios/store/robber.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/car/carStop.jpg",
      scenarioIMG: ["../images/scenarios/car/car2.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/park/park.jpg",
      scenarioIMG: ["../images/scenarios/park/guywbat.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/street/street.jpg",
      scenarioIMG: ["../images/scenarios/street/gang.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/house/house.jpg",
      scenarioIMG: ["../images/scenarios/house/guntohead.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/mall/mall.jpg",
      scenarioIMG: ["../images/scenarios/mall/gunescalater.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/school/school.jpg",
      scenarioIMG: ["../images/scenarios/school/kidhostage.jpg"]
    },
    {
      scenarioBG: "../images/scenarios/park/park.jpg",
      scenarioIMG: ["../images/scenarios/park/cop.jpg"]
    }
  ]);

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
