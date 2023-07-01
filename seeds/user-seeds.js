const { User } = require("../models");

const userData = [
  {
    email: "johndoe@email.com",
    password: "password",
    admin: 1,
  },
  {
    email: "emilyjohnson@email.com",
    password: "password",
    admin: 0,
  },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;
