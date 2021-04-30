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
      this.hasOne(models.Avatar, { foreignKey: "id" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      totalScore: DataTypes.INTEGER,
      gamesPlayed: DataTypes.INTEGER,
      highScore: DataTypes.INTEGER,
      avatarId: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
