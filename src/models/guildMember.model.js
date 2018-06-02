'use strict';
export default function (sequelize, DataTypes) {
    var guildMember = sequelize.define('GuildMember', {
        swgohGGUserName: DataTypes.STRING,
        gameUserName: DataTypes.STRING
    })

    guildMember.associate = function(models) {
        models.GuildMember.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        })
        models.GuildMember.hasMany(models.Character)
        models.GuildMember.hasMany(models.Mod)
        models.GuildMember.hasMany(models.Ship)
    }

    return guildMember
}