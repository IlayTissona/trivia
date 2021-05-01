'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('question_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      template_str: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      question_col: {
        type: Sequelize.STRING,
      },
      answer_col: {
        type: Sequelize.STRING,
      },
      is_first: {
        type: Sequelize.BOOLEAN,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('question_types');
  }
};