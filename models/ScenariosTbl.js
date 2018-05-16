module.exports = function (sequelize, DataTypes) {
    var Scenarios = sequelize.define("Scenarios", {
        shot: DataTypes.BOOLEAN,
        time: DataTypes.FLOAT,
        armedWith: DataTypes.STRING,
        title: DataTypes.STRING,
        scenarioImageUrl: DataTypes.STRING,
        backgroundImageUrl: DataTypes.STRING,
        UserId: DataTypes.INTEGER
    });
    Scenarios.associate = function (models) {
        Scenarios.belongsTo(models.User, {
            foreignKey: 'UserId'
        });
    };

    return Scenarios;
};