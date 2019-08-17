'use strict';
module.exports = (sequelize, DataTypes) => {
  const FieldElement = sequelize.define('FieldElement', {
    key: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    outline: DataTypes.STRING
  }, {});
  FieldElement.associate = function(models) {
    // associations can be defined here
    FieldElement.belongsTo(models.Game);
  };
  return FieldElement;
};