'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamePiece = sequelize.define('GamePiece', {
    key: DataTypes.STRING,
    year: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  GamePiece.associate = function(models) {
    GamePiece.belongsTo(models.Game, { foreignKey: 'year' });
  };
  return GamePiece;
};