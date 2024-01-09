const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BandUsers extends Model {}

BandUsers.init(
  {
    User_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username:{
      type: DataTypes.STRING
    },
    Password: {
      type: DataTypes.STRING
    },
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bandusers'
  }
);

module.exports = BandUsers;