'use strict';
export default function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        accountName: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN
    })

    User.associate = function(models) {
        models.User.hasOne(models.Profile)
        models.User.hasOne(models.GuildMember)
    }

    return User
}