"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("costOfLiving", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Country: {
        type: Sequelize.STRING,
      },
      CostofLivingIndex: {
        type: Sequelize.FLOAT,
      },
      RentIndex: {
        type: Sequelize.FLOAT,
      },
      CostofLivingPlusRentIndex: {
        type: Sequelize.FLOAT,
      },
      GroceriesIndex: {
        type: Sequelize.FLOAT,
      },
      RestaurantPriceIndex: {
        type: Sequelize.FLOAT,
      },
      LocalPurchasingPowerIndex: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("costOfLiving");
  },
};
