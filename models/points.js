'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Points extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Points.hasMany(models.Treatment, {
        foreignKey: 'pointsid'
      });
    }
  };
  Points.init({
    points: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Points',
  });
  return Points;
};