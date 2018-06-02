'use strict';
export default function (sequelize, DataTypes) {
    var Mod = sequelize.define('Mod', {
        character: DataTypes.STRING,
        tier: DataTypes.INTEGER,
        description: DataTypes.STRING,
        level: DataTypes.STRING,
        primaryType: DataTypes.STRING,
        primaryValue: DataTypes.STRING,
        secondaryOneType: DataTypes.STRING,
        secondaryOneValue: DataTypes.STRING,
        secondaryTwoType: DataTypes.STRING,
        secondaryTwoValue: DataTypes.STRING,
        secondaryThreeType: DataTypes.STRING,
        secondaryThreeValue: DataTypes.STRING,
        secondaryFourType: DataTypes.STRING,
        secondaryFourValue: DataTypes.STRING
    })

    Mod.associate = function(models) {
        models.Mod.belongsTo(models.Character)
        models.Mod.belongsTo(models.GuildMember)
    }

    return Mod
}