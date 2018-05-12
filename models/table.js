var sequelize = require("sequelize");

var Sequelize = require("../config/connection.js");

var User = Sequelize.define("User", {
  UId: {
    type: sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: sequelize.STRING,
    null: false,
  },
});

var Scenarios = Sequelize.define("Scenarios", {
  SId: {
    type: sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  shot: sequelize.BOOLEAN,
  time: sequelize.FLOAT,
  armedWith: sequelize.STRING,
  draw: sequelize.BOOLEAN,
  title: sequelize.STRING,
  videoUrl: sequelize.STRING,
});

var UserStats = Sequelize.define("UserStats", {});

var Master = Sequelize.define("masterListScenarios", {
  MId: {
    type: sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
});

UserStats.belongsTo(User);
Scenarios.belongsToMany(User, { through: UserStats });
module.exports = Scenarios;
