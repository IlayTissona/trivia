'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountriesGeneral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CountriesGeneral.init({
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    coastByAreaRatio: DataTypes.FLOAT,
    netMigration: DataTypes.FLOAT,
    infantMortalityPer1000Birth: DataTypes.FLOAT,
    GDPByDollars: DataTypes.FLOAT,
    literacyPercentage: DataTypes.FLOAT,
    phonesPer1000: DataTypes.FLOAT,
    arablePercentage: DataTypes.FLOAT,
    cropsPercentage: DataTypes.FLOAT,
    otherPercentage: DataTypes.FLOAT,
    climate: DataTypes.FLOAT,
    birthrate: DataTypes.FLOAT,
    deathrate: DataTypes.FLOAT,
    agriculture: DataTypes.FLOAT,
    industry: DataTypes.FLOAT,
    service: DataTypes.FLOAT
  }, {
    sequelize,
    tableName: 'countriesGeneral',
    modelName: 'CountriesGeneral',
  });
  return CountriesGeneral;
};