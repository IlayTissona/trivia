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
    questionId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionAskedPerPlayer',
    underscored: true,
  });
  return QuestionAskedPerPlayer;
};