'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countriesGeneral', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      coastByAreaRatio: {
        type: Sequelize.FLOAT
      },
      netMigration: {
        type: Sequelize.FLOAT
      },
      infantMortalityPer1000Birth: {
        type: Sequelize.FLOAT
      },
      GDPByDollars: {
        type: Sequelize.FLOAT
      },
      literacyPercentage: {
        type: Sequelize.FLOAT
      },
      phonesPer1000: {
        type: Sequelize.FLOAT
      },
      arablePercentage: {
        type: Sequelize.FLOAT
      },
      cropsPercentage: {
        type: Sequelize.FLOAT
      },
      otherPercentage: {
        type: Sequelize.FLOAT
      },
      climate: {
        type: Sequelize.FLOAT
      },
      birthrate: {
        type: Sequelize.FLOAT
      },
      deathrate: {
        type: Sequelize.FLOAT
      },
      agriculture: {
        type: Sequelize.FLOAT
      },
      industry: {
        type: Sequelize.FLOAT
      },
      service: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('countriesGeneral');
  }
};