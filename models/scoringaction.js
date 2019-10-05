'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScoringAction = sequelize.define('ScoringAction', {
    key: DataTypes.STRING,
    year: DataTypes.INTEGER,
    fieldElementId: DataTypes.INTEGER,
    gamePieceId: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {});
  ScoringAction.associate = function(models) {
    // associations can be defined here
    ScoringAction.belongsTo(models.Game, { foreignKey: 'year' });
  };
  return ScoringAction;
};