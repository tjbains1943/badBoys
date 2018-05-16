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
app.use(express.static("app/public"));

//require("./routes/MasterTblRoute.js")(app);
require("./routes/ScenariosTblRoute.js")(app);
require("./routes/UserTblRoute.js")(app);
//require("./routes/api-routes.js")(app);
//require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// This must be force: true during Development, then change to false at go-live.
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
