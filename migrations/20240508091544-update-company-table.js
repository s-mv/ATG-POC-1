'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Company', 'verified', Sequelize.BOOLEAN);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Company', 'verified');
  }
};
