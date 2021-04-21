'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PopulationDensity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PopulationDensity.init({
    country: DataTypes.STRING,
    areaByKm2: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
    densityPopBykm2: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'PopulationDensity',
  });
  return PopulationDensity;
};