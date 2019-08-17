'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define('EventType', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  EventType.associate = function(models) {
    // associations can be defined here
  };
  return EventType;
};