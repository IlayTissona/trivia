"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Player, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      totalScore: DataTypes.INTEGER,
      gamesPlayed: DataTypes.INTEGER,
      highScore: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true
    }
  );
  return User;
};
