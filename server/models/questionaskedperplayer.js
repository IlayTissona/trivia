'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionAskedPerPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionAskedPerPlayer.init({
    isPassed: DataTypes.BOOLEAN,
    rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionAskedPerPlayer',
    tableName: 'question_asked_per_players',
    underscored: true
  });
  return QuestionAskedPerPlayer;
};