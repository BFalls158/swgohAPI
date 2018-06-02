'use strict';
export default function (sequelize, DataTypes) {
    var Character = sequelize.define('Character', {
        guildMember: DataTypes.STRING,
        code: DataTypes.STRING,
        description: DataTypes.STRING,
        imageSrc: DataTypes.STRING,
        star: DataTypes.INTEGER,
        gearLevel: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        galacticPower: DataTypes.INTEGER,
        maxGalacticPower: DataTypes.INTEGER
    })

    Character.associate = function(models) {
        models.Character.belongsTo(models.GuildMember)
        models.Character.hasMany(models.Mod)
    }

    return Character
}