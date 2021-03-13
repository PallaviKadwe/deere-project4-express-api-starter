'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organ.hasMany(models.Treatment, {
        foreignKey: 'organid'
      });
    }
  };
  Organ.init({
    organ: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organ',
  });
  return Organ;
};