const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      post: {
        type: DataTypes.STRING
      },
      band_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'band',
          key: 'id',
        },
      },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
      }
    );
    
    module.exports = Posts;