'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Companies', {
            company_id: Sequelize.INTEGER,
            name: Sequelize.STRING,
            country: Sequelize.STRING,
            website: Sequelize.STRING,
            email: Sequelize.STRING,
            verified: Sequelize.BOOLEAN,
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Companies');
    }
};
