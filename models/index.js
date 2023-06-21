// import models
const User = require ('./User');
const Event = require ('./Event');
const Tag = require ('./Tag');

// User belongsToMany Events
// One user can host one or more events
User.hasMany(Event, {
    foreignKey: 'host_id',
});

// User can attend many (belongsToMany) Event
User.belongsToMany(Event, {
    foreignKey: 'event_id',
});

// User can have many (belongsToMany) Event
User.belongsToMany(Event, {
    foreignKey: 'favourite_id',
});

// Tags belongsToMany (can be attributed to many) Events
Tag.belongsToMany(Event, {
    foreignKey: 'tag_id'
});

module.exports = {
    User,
    Event,
    Tag,
};