// import models
const User = require ('./User');
const Event = require ('./Event');
const Tag = require ('./Tag');

// User belongsToMany Events (events_id)

// User has many (belongsToMany) favourite Events

// Events have many Users

// Event belongsToMany Tags

// Tags belongsToMany Events