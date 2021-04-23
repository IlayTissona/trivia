'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.QuestionStats, { foreignKey: "id" })
      this.belongsToMany(models.Player, { through: models.QuestionAskedPerPlayer })
    }
  };
  SavedQuestion.init({
    text: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    answer: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'saved_questions',
    modelName: 'SavedQuestion',
    underscored: true,
  });
  return SavedQuestion;
};