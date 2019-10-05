'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FieldElements', [
      { year: 2019, key: 'A1', name: 'topLeftRocketNear', description: 'Left Rocket Level 3 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B1', name: 'topLeftRocketCargo1', description: 'Left Rocket Level 3 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B2', name: 'topLeftRocketCargo2', description: 'Left Rocket Level 3 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C1', name: 'topLeftRocketFar', description: 'Left Rocket Level 3 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'A3', name: 'midLeftRocketNear', description: 'Left Rocket Level 2 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B3', name: 'midLeftRocketCargo1', description: 'Left Rocket Level 2 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B4', name: 'midLeftRocketCargo2', description: 'Left Rocket Level 2 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C3', name: 'midLeftRocketFar', description: 'Left Rocket Level 2 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'A5', name: 'lowLeftRocketNear', description: 'Left Rocket Level 1 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B5', name: 'lowLeftRocketCargo1', description: 'Left Rocket Level 1 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B6', name: 'lowLeftRocketCargo2', description: 'Left Rocket Level 1 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C5', name: 'lowLeftRocketFar', description: 'Left Rocket Level 1 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },


      { year: 2019, key: 'D1', name: 'bay1panel', description: 'Cargo Ship Left Rear Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E1', name: 'bay1cargo', description: 'Cargo Ship Left Rear Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F1', name: 'bay8cargo', description: 'Cargo Ship Right Rear Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G1', name: 'bay8panel', description: 'Cargo Ship Right Rear Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D3', name: 'bay2panel', description: 'Cargo Ship Left Middle Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E3', name: 'bay2cargo', description: 'Cargo Ship Left Middle Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F3', name: 'bay7cargo', description: 'Cargo Ship Right Middle Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G3', name: 'bay7panel', description: 'Cargo Ship Right Middle Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D5', name: 'bay3panel', description: 'Cargo Ship Left Forward Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E5', name: 'bay3cargo', description: 'Cargo Ship Left Forward Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F5', name: 'bay6cargo', description: 'Cargo Ship Right Forward Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G5', name: 'bay6panel', description: 'Cargo Ship Right Forward Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D7', name: 'bay4panel', description: 'Cargo Ship Front Left Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'D8', name: 'bay4cargo', description: 'Cargo Ship Front Left Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F7', name: 'bay5cargo', description: 'Cargo Ship Front Right Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F8', name: 'bay5panel', description: 'Cargo Ship Front Right Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },


      { year: 2019, key: 'H1', name: 'topLeftRocketNear', description: 'Left Rocket Level 3 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I1', name: 'topLeftRocketCargo1', description: 'Left Rocket Level 3 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I2', name: 'topLeftRocketCargo2', description: 'Left Rocket Level 3 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J1', name: 'topLeftRocketFar', description: 'Left Rocket Level 3 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'H3', name: 'midLeftRocketNear', description: 'Left Rocket Level 2 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I3', name: 'midLeftRocketCargo1', description: 'Left Rocket Level 2 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I4', name: 'midLeftRocketCargo2', description: 'Left Rocket Level 2 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J3', name: 'midLeftRocketFar', description: 'Left Rocket Level 2 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'H5', name: 'lowLeftRocketNear', description: 'Left Rocket Level 1 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I5', name: 'lowLeftRocketCargo1', description: 'Left Rocket Level 1 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I6', name: 'lowLeftRocketCargo2', description: 'Left Rocket Level 1 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J5', name: 'lowLeftRocketFar', description: 'Left Rocket Level 1 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'HL1', name: 'HabLevel1Left', description: 'Hab Level 1 - Left', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HM1', name: 'HabLevel1Middle', description: 'Hab Level 1 - Middle', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HR1', name: 'HabLevel1Right', description: 'Hab Level 1 - Right', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HL2', name: 'HabLevel2Left', description: 'Hab Level 2 - Left', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HR2', name: 'HabLevel2Right', description: 'Hab Level 2 - Right', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HM3', name: 'HabLevel3Middle', description: 'Hab Level 3 - Middle', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FieldElements', null, {});
  }
};
