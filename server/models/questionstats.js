'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  questionStats.init({
    rankCount: DataTypes.INTEGER,
    rankTotal: DataTypes.INTEGER,
    rankTotalScore: DataTypes.INTEGER,
    totalPassed: DataTypes.INTEGER,
    totalFailed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionStats',
    underscored: true,
  });
  return QuestionStats;
};