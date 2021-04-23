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
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rank_total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rank_total_score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      total_passed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      total_failed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      final_rank: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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