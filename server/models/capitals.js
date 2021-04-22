'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Capitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Capitals.init({
    country: DataTypes.STRING,
    capital: DataTypes.STRING,
    continent: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'capitals',
    modelName: 'Capitals',
    underscored: true,
  });
  return Capitals;
};