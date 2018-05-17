<<<<<<< HEAD
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require("dotenv").config();
=======
require('dotenv').config()
>>>>>>> b92b4562f21f1e9bfe0d94cbc009fe788ecc556f
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
// Requiring our models for syncing
var app = express();
var PORT = process.env.PORT || 8080;

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
// Note: separated into separate table files
require("./routes/table-api-routes.js")(app);
// require("./routes/ScenariosTblRoute.js")(app);
// require("./routes/UserTblRoute.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: true,
  // logging: console.log
}).then(function () {

  db.Scenarios.bulkCreate([
    {
      scenarioBG: "../images/scenarios/house/house.jpg",
      scenarioIMG: ["../images/scenarios/house/burgYellow.jpg"],
      title: "Burglar with man in yellow at house",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/mall/mall.jpg",
      scenarioIMG: ["../images/scenarios/mall/activeShooter.jpg"],
      title: "Active shooter in the mall",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/store/store.jpg",
      scenarioIMG: ["../images/scenarios/store/robber.jpg"],
      title: "Armed robber at store",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/car/carStop.jpg",
      scenarioIMG: ["../images/scenarios/car/car2.jpg"],
      title: "Car stop",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/park/park.jpg",
      scenarioIMG: ["../images/scenarios/park/guywbat.jpg"],
      title: "Man with bat in park",
      armed: "bat"
    },
    {
      scenarioBG: "../images/scenarios/street/street.jpg",
      scenarioIMG: ["../images/scenarios/street/gang.jpg"],
      title: "Gang member in street",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/house/house.jpg",
      scenarioIMG: ["../images/scenarios/house/guntohead.jpg"],
      title: "Suicide gun to head",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/mall/mall.jpg",
      scenarioIMG: ["../images/scenarios/mall/gunescalater.jpg"],
      title: "Man with gun on escalater",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/school/school.jpg",
      scenarioIMG: ["../images/scenarios/school/kidhostage.jpg"],
      title: "shooter Hostage at school",
      armed: "gun"
    },
    {
      scenarioBG: "../images/scenarios/park/park.jpg",
      scenarioIMG: ["../images/scenarios/park/cop.jpg"],
      title: "Cop",
      armed: "gun"
    }
  ]);

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
