const { User } = require('../models');

const userData = [
    {
        username: "John Doe",
        password: "password",
        attending_event: 1,
        admin: 1,
    },
    {
        username: "Emily Johnson",
        password: "password",
        attending_event: 2,
        admin: 0,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;