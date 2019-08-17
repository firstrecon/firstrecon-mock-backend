'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    year: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.hasMany(models.Competition);
  };
  return Game;
};