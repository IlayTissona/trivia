"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 6,
            msg: "Password must be more than 6 characters"
          }
        }
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      total_score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      games_played: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      high_score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      avatar_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      refresh_token: {
        type: Sequelize.TEXT,
        defaultValue: null

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
