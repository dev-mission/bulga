'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Budget.belongsTo(models.User);
    }
  };
  Budget.init({
    dollarAmount: DataTypes.DECIMAL,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};