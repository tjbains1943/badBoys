var sequelize = require("sequelize");
var Sequelize = require("../config/connection.js");
var UserStats = {};
var Scenarios = {};
var User = {};

module.exports = function (Sequelize, DataTypes) {
  var UserStats = Sequelize.define("UserStats", {
    UId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },

    SId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: false,
      foreignKey: true,
      allowNull: false,
    }

  });

  return UserStats;
};

module.exports = function (Sequelize, DataTypes) {
  var Scenarios = Sequelize.define("Scenarios", {
    SId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    shot: DataTypes.BOOLEAN,
    time: DataTypes.FLOAT,
    armedWith: DataTypes.STRING,
    draw: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
  });

  return Scenarios;
};

module.exports = function (Sequelize, DataTypes) {
  var User = Sequelize.define("User", {
    UId: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      null: false,
    },


  });
  return User;
};

/*    
    UId: {
      type: DataTypes.foreignKey,
    },
    SId: {
      type: DataTypes.foreignKey,
    },
*/

// === Associations
UserStats.associate = function (models) {
  UserStats.belongsTo(models.User, { foreignKey: "UId" })
};

UserStats.associate = function (models) {
  UserStats.hasMany(models.Scenarios, {
    foreignKey: { foreignKey: "SId" },
  })
};

Scenarios.associate = function (models) {
  Scenarios.belongsTo(models.UserStats, { foreignKey: "SId" })
};

User.associate = function (models) {
  User.hasMany(models.UserStats)
};

Sequelize.sync();

/*  TODO after we fix the joins on dynamic part
var Master = Sequelize.define("masterListScenarios", {
  MId: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
});
*/

