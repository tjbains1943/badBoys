var UserStats = require("./UserTbl");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // TODO: validations
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        className: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    });
    User.associate = function (models) {
        User.hasMany(models.Scenarios, {
            foreignKey: 'UserId',
            onDelete: "cascade"
        });
    };

    return User;
};