'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Avatar, { foreignKey: "avatarId" })
      this.belongsToMany(models.SavedQuestion, { through: models.QuestionAskedPerPlayer })
    }
  };
  Player.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    avatarId: DataTypes.INTEGER,
    strikes: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'players',
    modelName: 'Player',
    underscored: true,
  });
  return Player;
};