// import models
const User = require ('./User');
const Event = require ('./Event');
// const Tag = require ('./Tag');
const Ticket = require('./Ticket')

// User belongsToMany Events
// One user can host one or more events
// User.hasMany(Event, {
//     foreignKey: 'host_id',
// });

// // // many-to-one relation; one Event is hosted by (belongsTo) a User
// Event.belongsTo(User, {
//     foreignKey: 'host_id',
// });

Event.belongsToMany(User, {
    through: {
        model: Ticket
    },
    // foreignKey: 'host_id',
})

// User can attend many (hasMany) Event
// User.hasMany(Event, {
//     foreignKey: 'attending_event',
// });

// An Event can have multiple (belongsToMany) Users (attendees)
Event.belongsToMany(User, {
    through: {
        model: Ticket
    },
    foreignKey: 'attending_event',
    as: 'attending_events'
})

// An Event can have multiple Tag
// Event.hasMany(Tag, {
//     foreignKey: 'tag_id'
// });

// // Tags belongsToMany (can be attributed to many) Events
// Tag.belongsToMany(Event, {
//     through: {
//         model: Ticket 
//     },
//     foreignKey: 'tag_id'
// });

module.exports = {
    User,
    Event,
    Ticket,
};