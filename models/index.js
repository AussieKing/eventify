// import models

const Event = require("./event");
const Tag = require("./Tag");
const Ticket = require("./Ticket");
const User = require("./user");
// User belongsToMany Events
// One user can host one or more events
// User.hasMany(Event, {
//     foreignKey: 'host_id',
// });

// // // many-to-one relation; one Event is hosted by (belongsTo) a User
// Event.belongsTo(User, {
//     foreignKey: 'host_id',
// });

User.belongsToMany(Event, {
  through: {
    model: Ticket,
    unique: false,
  },
  as: "rsvp_event",
  // foreignKey: 'host_id',
});

// User can attend many (hasMany) Event
// User.hasMany(Event, {
//     foreignKey: 'attending_event',
// });

// An Event can have multiple (belongsToMany) Users (attendees)
Event.belongsToMany(User, {
  through: {
    model: Ticket,
    unique: false,
  },
  as: "guests",
});

// An Event can have multiple Tag
// Event.hasMany(Tag, {
//     foreignKey: 'tag_id'
// });

// // Tags belongsToMany (can be attributed to many) Events
// Tag.belongsToMany(Event, {
//   through: {
//     model: Ticket,
//   },
//   foreignKey: "tag_id",
// });

module.exports = {
  User,
  Event,
  Tag,
  Ticket,
};
