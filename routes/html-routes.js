var Scenarios = require("../models/table");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/login", function(req, res) {
    // fs.readFile(__dirname + "/index.html", function(err, data) {
    //   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    //   // an html file.
    // //   res.writeHead(200, { "Content-Type": "text/html" });
    // //   res.end(data);
    // });
    console.log("running");
    res.json({ one: "1" });
  });

  app.get("/api/admin", function(req, res) {});

  app.get("/api/runtime", function(req, res) {});
};
