'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competition = sequelize.define('Competition', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  }, {});
  Competition.associate = function(models) {
    // associations can be defined here
    Competition.belongsTo(models.Game);
  };
  return Competition;
};