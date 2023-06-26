// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Ticket extends Model{}

Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      attending_event: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
          unique: false
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'ticket'
    }
);

module.exports = Ticket;