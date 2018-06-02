'use strict';
export default function (sequelize, DataTypes) {
    var Profile = sequelize.define('Profile', {
        galacticPower: DataTypes.INTEGER,
        charactersGalacticPower: DataTypes.INTEGER,
        shipsGalacticPower: DataTypes.INTEGER,
        pVEBattlesWon: DataTypes.INTEGER,
        pVEHardBattlesWon: DataTypes.INTEGER,
        galacticWarBattlesWon: DataTypes.INTEGER,
        arenaBattlesWon: DataTypes.INTEGER,
        guildCurrencyEarned: DataTypes.INTEGER,
        raidsWon: DataTypes.INTEGER,
        shipBattlesWon: DataTypes.INTEGER,
        collectionScore: DataTypes.FLOAT,
        characters: DataTypes.INTEGER,
        characters7: DataTypes.INTEGER,
        characters6: DataTypes.INTEGER,
        gearXII: DataTypes.INTEGER,
        gearXI: DataTypes.INTEGER,
        gearX: DataTypes.INTEGER,
        gearIX: DataTypes.INTEGER,
        gearVIII: DataTypes.INTEGER,
        username: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        arenaRank: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        allyCode: DataTypes.STRING,
        joined: DataTypes.STRING,
        guild: DataTypes.STRING,
        guildUrl: DataTypes.STRING
    })

    // Profile.associate = function(models) {
    //     models.Profile.belongsTo(models.User)
    // }

    return Profile
}