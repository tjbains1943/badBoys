var path = require("path");


module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/scenario", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/scenario.html"));
  });
  app.get("/news", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/news.html"));
  });
  app.get("/crime", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/crime.html"));
  });
  app.get("/statistics", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
  // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

};
