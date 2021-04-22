'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionType.init({
    templateStr: DataTypes.STRING,
    model: DataTypes.STRING,
    questionCol: DataTypes.STRING,
    answerCol: DataTypes.STRING,
    isFirst: DataTypes.BOOLEAN,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'question_types',
    modelName: 'QuestionType',
    underscored: true,
  });
  return QuestionType;
};