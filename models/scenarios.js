module.exports = function (sequelize, DataTypes) {
    var Scenarios = sequelize.define("Scenarios", {
        scenarioBG: DataTypes.STRING,
        scenarioIMG: DataTypes.STRING,
        title: DataTypes.STRING,
        armed: DataTypes.STRING
    });

    return Scenarios;
};
