var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING,
            // validate: {
            //     notNull: true,
            //     notEmpty: true,
            //     len: [3, 20],
            //     unique: true
            // }
        },
        password: {
            type: DataTypes.STRING,
            // validate: {
            //     notNull: true,
            //     notEmpty: true,
            //     len: [3, 20],
            //     unique: true
            // }
        },
        classID: {
            type: DataTypes.STRING,
            // validate: {
            //     notNull: true,
            //     notEmpty: true,
            //     len: [3, 20],
            //     unique: true
            // }
        }
    }, {
            // hooks: {
            //     afterValidate: function (user) {
            //         user.password = bcrypt.hashSync(user.password, 8);
            //     }
            // }
        });

    Users.associate = function (models) {
        Users.hasMany(models.ScenarioStats, {
            onDelete: "cascade"
        });
    };

    return Users;
};
