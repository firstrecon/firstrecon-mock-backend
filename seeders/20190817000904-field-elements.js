'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FieldElements', [
      { year: 2019, key: 'A1', name: 'topLeftRocketNear', Description: 'Left Rocket Level 3 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B1', name: 'topLeftRocketCargo1', Description: 'Left Rocket Level 3 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B2', name: 'topLeftRocketCargo2', Description: 'Left Rocket Level 3 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C1', name: 'topLeftRocketFar', Description: 'Left Rocket Level 3 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'A3', name: 'midLeftRocketNear', Description: 'Left Rocket Level 2 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B3', name: 'midLeftRocketCargo1', Description: 'Left Rocket Level 2 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B4', name: 'midLeftRocketCargo2', Description: 'Left Rocket Level 2 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C3', name: 'midLeftRocketFar', Description: 'Left Rocket Level 2 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'A5', name: 'lowLeftRocketNear', Description: 'Left Rocket Level 1 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B5', name: 'lowLeftRocketCargo1', Description: 'Left Rocket Level 1 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'B6', name: 'lowLeftRocketCargo2', Description: 'Left Rocket Level 1 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'C5', name: 'lowLeftRocketFar', Description: 'Left Rocket Level 1 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },


      { year: 2019, key: 'D1', name: 'bay1panel', Description: 'Cargo Ship Left Rear Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E1', name: 'bay1cargo', Description: 'Cargo Ship Left Rear Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F1', name: 'bay8cargo', Description: 'Cargo Ship Right Rear Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G1', name: 'bay8panel', Description: 'Cargo Ship Right Rear Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D3', name: 'bay2panel', Description: 'Cargo Ship Left Middle Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E3', name: 'bay2cargo', Description: 'Cargo Ship Left Middle Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F3', name: 'bay7cargo', Description: 'Cargo Ship Right Middle Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G3', name: 'bay7panel', Description: 'Cargo Ship Right Middle Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D5', name: 'bay3panel', Description: 'Cargo Ship Left Forward Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'E5', name: 'bay3cargo', Description: 'Cargo Ship Left Forward Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F5', name: 'bay6cargo', Description: 'Cargo Ship Right Forward Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'G5', name: 'bay6panel', Description: 'Cargo Ship Right Forward Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'D7', name: 'bay4panel', Description: 'Cargo Ship Front Left Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'D8', name: 'bay4cargo', Description: 'Cargo Ship Front Left Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F7', name: 'bay5cargo', Description: 'Cargo Ship Front Right Bay Cargo', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'F8', name: 'bay5panel', Description: 'Cargo Ship Front Right Bay Hatch Panel', createdAt: new Date(), updatedAt: new Date() },


      { year: 2019, key: 'H1', name: 'topLeftRocketNear', Description: 'Left Rocket Level 3 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I1', name: 'topLeftRocketCargo1', Description: 'Left Rocket Level 3 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I2', name: 'topLeftRocketCargo2', Description: 'Left Rocket Level 3 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J1', name: 'topLeftRocketFar', Description: 'Left Rocket Level 3 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'H3', name: 'midLeftRocketNear', Description: 'Left Rocket Level 2 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I3', name: 'midLeftRocketCargo1', Description: 'Left Rocket Level 2 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I4', name: 'midLeftRocketCargo2', Description: 'Left Rocket Level 2 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J3', name: 'midLeftRocketFar', Description: 'Left Rocket Level 2 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'H5', name: 'lowLeftRocketNear', Description: 'Left Rocket Level 1 Near-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I5', name: 'lowLeftRocketCargo1', Description: 'Left Rocket Level 1 Cargo 1', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'I6', name: 'lowLeftRocketCargo2', Description: 'Left Rocket Level 1 Cargo 2', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'J5', name: 'lowLeftRocketFar', Description: 'Left Rocket Level 1 Far-side Hatch Panel', createdAt: new Date(), updatedAt: new Date() },

      { year: 2019, key: 'HL1', name: 'HabLevel1Left', Description: 'Hab Level 1 - Left', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HM1', name: 'HabLevel1Middle', Description: 'Hab Level 1 - Middle', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HR1', name: 'HabLevel1Right', Description: 'Hab Level 1 - Right', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HL2', name: 'HabLevel2Left', Description: 'Hab Level 2 - Left', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HR2', name: 'HabLevel2Right', Description: 'Hab Level 2 - Right', createdAt: new Date(), updatedAt: new Date() },
      { year: 2019, key: 'HM3', name: 'HabLevel3Middle', Description: 'Hab Level 3 - Middle', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FieldElements', null, {});
  }
};
