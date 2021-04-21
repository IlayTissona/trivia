'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('qualityOfLife', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      qualityOfLifeIndex: {
        type: Sequelize.FLOAT
      },
      purchasingPowerIndex: {
        type: Sequelize.FLOAT
      },
      safetyIndex: {
        type: Sequelize.FLOAT
      },
      healthCareIndex: {
        type: Sequelize.FLOAT
      },
      costOfLivingIndex: {
        type: Sequelize.FLOAT
      },
      propertyPriceToIncomeRatio: {
        type: Sequelize.FLOAT
      },
      trafficCommuteTimeIndex: {
        type: Sequelize.FLOAT
      },
      pollutionIndex: {
        type: Sequelize.FLOAT
      },
      climateIndex: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('qualityOfLife');
  }
};