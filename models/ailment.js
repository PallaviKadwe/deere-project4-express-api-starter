'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ailment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ailment.hasMany(models.Treatment, {
        foreignKey: 'ailmentid'
      });
    }
  };
  Ailment.init({
    ailment: DataTypes.STRING,
    ailmentdetails: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ailment',
  });
  return Ailment;
};