'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Company", {
      company_id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      country: Sequelize.STRING,
      website: Sequelize.STRING,
      email: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Company");
  }
};
