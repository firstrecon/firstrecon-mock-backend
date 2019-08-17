'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventTypes', [
      { name: 'ScoreSuccess', description: 'Team successfully scored', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ScoreFail', description: 'Team failed to score', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Drop', description: 'Team dropped a game piece', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Defend', description: 'Team switched to defense', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Attack', description: 'Team switched to offense', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Defended', description: 'Team was actively defended', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Undefended', description: 'Team was no longer defended', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Disabled', description: 'Team became disabled', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Enabled', description: 'Team became enabled', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Penalty', description: 'Team was penalized', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventTypes', null, {});
  }
};
