const seedEvents = require('./event-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const { User } = require('../models');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();
  