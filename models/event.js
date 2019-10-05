'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    year: DataTypes.INTEGER,
    scoringActionId: DataTypes.INTEGER,
    teamKey: DataTypes.INTEGER,
    matchKey: DataTypes.STRING,
    alliance: DataTypes.STRING,
    position: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Game, { foreignKey: 'year' });
  };
  return Event;
};