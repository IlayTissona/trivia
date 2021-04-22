'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgeStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AgeStructure.init({
    country: DataTypes.STRING,
    age0To14Years: DataTypes.FLOAT,
    age15To64Years: DataTypes.FLOAT,
    ageAbove65Years: DataTypes.FLOAT
  }, {
    sequelize,
    tableName: 'ageStructure',
    modelName: 'AgeStructure',
  });
  return AgeStructure;
};