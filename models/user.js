// Represents the User model with properties like username, email, password, etc.
// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// bcrypt to hash password
const bcrypt = require('bcrypt');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
  // user bcrypt to validate password when user logs in 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
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
    // attending_event: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "event",
    //     key: "id",

    //   },
    // },
    admin: {
      // 0 = regular user / 1 = admin user
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

User.prototype.validPassword = function (password) {
  return this.password === password;
};

module.exports = User;
