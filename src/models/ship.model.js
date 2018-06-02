'use strict';
export default function (sequelize, DataTypes) {
    var Ship = sequelize.define('Ship', {
        code: DataTypes.STRING,
        description: DataTypes.STRING,
        imageSrc: DataTypes.STRING,
        star: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        galacticPower: DataTypes.INTEGER,
        maxGalacticPower: DataTypes.INTEGER,
        crew1Code: DataTypes.STRING,
        crew1Description: DataTypes.STRING,
        crew1ImageSrc: DataTypes.STRING,
        crew1Star: DataTypes.INTEGER,
        crew1Level: DataTypes.INTEGER,
        crew2Code: DataTypes.STRING,
        crew2Description: DataTypes.STRING,
        crew2ImageSrc: DataTypes.STRING,
        crew2Star: DataTypes.INTEGER,
        crew2Level: DataTypes.INTEGER,
        crew3Code: DataTypes.STRING,
        crew3Description: DataTypes.STRING,
        crew3ImageSrc: DataTypes.STRING,
        crew3Star: DataTypes.INTEGER,
        crew3Level: DataTypes.INTEGER
    })

    Ship.associate = function(models) {
        models.Ship.belongsTo(models.GuildMember)
        models.Ship.hasMany(models.Character)
    }

    return Ship
}