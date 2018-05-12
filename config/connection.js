// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_library", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;
