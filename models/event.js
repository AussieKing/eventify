// Defines the Event model, including its attributes like title, description, date, time, etc.

// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Tag model (table) by extending off Sequelize's Model class
class Event extends Model {}

Event.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the host for this event
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // no autoIncrement as linked to unique user ID
    },
    // event status (0 = not started / 1 = in progress / 2 = completed)
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // default value = 0 (free event)
      validate: {
        isDecimal: true,
      },
    },
    event_photo: {
      type: DataTypes.STRING,
      // only in seeded data, so allowNull enabled
      allowNull: true,
    },
    time: {
      // Sequelize DataType Date becomes converted to DATETIME in MySQL (YYYY-MM-DD HH:MI:SS)
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    // foreign key references through index & through Ticket
    // tag_id: {
    //     type: DataTypes.INTEGER,
    //     // references: {
    //     //     model: 'tag',
    //     //     key: 'id',
    //     // },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
