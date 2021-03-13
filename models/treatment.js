'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treatment.belongsTo(models.Organ, {foreignKey : "organid"});
      Treatment.belongsTo(models.Ailment, {foreignKey : "ailmentid"});
      Treatment.belongsTo(models.Locations, {foreignKey : "locationid"});
      Treatment.belongsTo(models.Points, {foreignKey : "pointsid"});
    }
  };
  Treatment.init({
    organid: DataTypes.INTEGER,
    ailmentid: DataTypes.INTEGER,
    pointsid: DataTypes.INTEGER,
    locationid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};