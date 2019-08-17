'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('GamePieces', [
        { year: 2019, key: 'c', name: 'Cargo', description: 'Orange ball for placing into cargo bays', createdAt: new Date(), updatedAt: new Date() },
        { year: 2019, key: 'p', name: 'Hatch Panel', description: 'Disk for covering/closing hatches on cargo bays', createdAt: new Date(), updatedAt: new Date() },
        { year: 2019, key: 'n', name: 'Null Panel', description: 'Non-scoring hatch panel placed at start of match', createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
