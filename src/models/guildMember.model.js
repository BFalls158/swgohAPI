'use strict';
export default function (sequelize, DataTypes) {
    var guildMember = sequelize.define('GuildMember', {
        swgohGGUserName: DataTypes.STRING,
        gameUserName: DataTypes.STRING
    })

    // User.associate = function(models) {
    //     models.User.belongsTo(models.User)
    // }

    return guildMember
}