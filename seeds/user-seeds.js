const { User } = require('../models');

const userData = [
    {
        email: "johndoe@email.com",
        password: "password",
        attending_event: 1,
        admin: 1,
    },
    {
        email: "emilyjohnson@email.com",
        password: "password",
        attending_event: 2,
        admin: 0,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;