const { User } = require('../models');

const userData = [
    {
        username: "johndoe@email.com",
        password: "password",
        attending_event: 1,
        admin: 1,
    },
    {
        username: "emilyjohnson@email.com",
        password: "password",
        attending_event: 2,
        admin: 0,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;