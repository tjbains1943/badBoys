module.exports = function (sequelize, DataTypes) {
    var ScenarioStats = sequelize.define("ScenarioStats", {
        title: DataTypes.STRING,
        shot: DataTypes.BOOLEAN,
        time: DataTypes.FLOAT,
        armedWith: DataTypes.STRING
    });

    ScenarioStats.associate = function (models) {

        ScenarioStats.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return ScenarioStats;
};
