'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CostOfLiving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CostOfLiving.init({
    country: DataTypes.STRING,
    costofLivingIndex: DataTypes.FLOAT,
    rentIndex: DataTypes.FLOAT,
    costofLivingPlusRentIndex: DataTypes.FLOAT,
    groceriesIndex: DataTypes.FLOAT,
    restaurantPriceIndex: DataTypes.FLOAT,
    localPurchasingPowerIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CostOfLiving',
  });
  return CostOfLiving;
};