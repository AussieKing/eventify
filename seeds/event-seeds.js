const { Event } = require('../models');

const eventData = [
    {
        event_title: "Outdoor Movie Night",
        event_description: "Set up a series of outdoor movie screenings in picturesque locations around Adelaide. Select a mix of classic and contemporary films and provide comfortable seating, food trucks, and entertainment for a memorable evening under the stars.",
        host_id: 0,
        status: 0,
        location: "Botanic Gardens",
        price: 0,
        event_photo: "0-movie-night.jpg",
        time: "2023-12-06 19:00:00",
        tag_id: 0,
    },
    {
        event_title: "Food and Wine Festival",
        event_description: "Host a food and wine festival that highlights the diverse culinary scene of Adelaide. Feature local wineries, breweries, food vendors, and live cooking demonstrations.",
        host_id: 0,
        status: 1,
        location: "Hindmarsh Square",
        price: 5,
        event_photo: "1-food-and-wine.jpg",
        time: "2023-07-03 09:00:00",
        tag_id: 1,
    },
    {
        event_title: "Adelaide Street Art Tour",
        event_description: "Curate a guided street art tour that takes participants through the vibrant graffiti and mural scenes in Adelaide. Collaborate with local artists to share insights about their work and the city's urban art culture.",
        host_id: 0,
        status: 2,
        location: "Adelaide City",
        price: 0,
        event_photo: "2-street-art.jpg",
        time: "2023-05-01 09:00:00",
        tag_id: 1,
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
