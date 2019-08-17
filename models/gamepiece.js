'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamePiece = sequelize.define('GamePiece', {
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  GamePiece.associate = function(models) {
    GamePiece.belongsTo(models.Game);
  };
  return GamePiece;
};