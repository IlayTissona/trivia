'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('question_stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rank_count: {
        type: Sequelize.INTEGER
      },
      rank_total: {
        type: Sequelize.INTEGER
      },
      rank_total_score: {
        type: Sequelize.INTEGER
      },
      total_passed: {
        type: Sequelize.INTEGER
      },
      total_failed: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('question_stats');
  }
};