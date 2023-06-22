const { User } = require('../models');

const userData = [
    {
        name: "John Doe",
        password: "password",
        attending_event: 1,
        admin: 1,
    },
    {
        name: "Emily Johnson",
        password: "password",
        attending_event: 2,
        admin: 0,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;