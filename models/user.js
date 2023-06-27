// Represents the User model with properties like username, email, password, etc.
// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // favourite_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'event',
    //         key: 'favourited_by'
    //     }
    // },
    attending_event: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
      },
    },
    admin: {
      // 0 = regular user / 1 = admin user
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  },
);

User.prototype.validPassword = function (password) {
  return this.password === password
}

module.exports = User;
