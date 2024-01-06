const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bands extends Model {}

Bands.init(
  {
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    band: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'band'
  }
);

module.exports = Bands;