const { Event } = require("../models");

const eventData = [
  {
    event_title: "Outdoor Movie Night",
    event_description:
      "Set up a series of outdoor movie screenings in picturesque locations around Adelaide. Select a mix of classic and contemporary films and provide comfortable seating, food trucks, and entertainment for a memorable evening under the stars.",
    host_id: 0,
    status: 0,
    location: "Botanic Gardens",
    price: 0,
    event_photo: "outdoor-movie-night-1592326155.jpg",
    time: "2023-12-06 19:00:00",
    tag_id: 0,
  },
  {
    event_title: "Food and Wine Festival",
    event_description:
      "Host a food and wine festival that highlights the diverse culinary scene of Adelaide. Feature local wineries, breweries, food vendors, and live cooking demonstrations.",
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
    event_description:
      "Curate a guided street art tour that takes participants through the vibrant graffiti and mural scenes in Adelaide. Collaborate with local artists to share insights about their work and the city's urban art culture.",
    host_id: 0,
    status: 2,
    location: "Adelaide City",
    price: 0,
    event_photo: "2-street-art.jpg",
    time: "2023-05-01 09:00:00",
    tag_id: 1,
  },
  {
    event_title: "Garden Music Festival",
    event_description:
      "Transform a beautiful garden into a music festival venue, featuring local and international artists across various genres. Provide multiple stages, food stalls, and a lively atmosphere for music enthusiasts.",
    host_id: 0,
    status: 0,
    location: "Rose Park",
    price: 10,
    event_photo: "secret-garden-party-2013-14-1376304908-view-0.jpg",
    time: "2023-09-16 14:00:00",
    tag_id: 2,
  },
  {
    event_title: "Adventure Race Challenge",
    event_description:
      "Organize an exciting adventure race where participants navigate through a series of physical and mental challenges. Incorporate elements like obstacle courses, riddles, and teamwork for an adrenaline-filled experience.",
    host_id: 0,
    status: 1,
    location: "Mount Lofty",
    price: 15,
    event_photo:
      "world-s-toughest-race-eco-challenge-fiji-ECCH_S1_Unit_Gillies_014225R_rgb.jpg",
    time: "2023-08-20 08:00:00",
    tag_id: 3,
  },
  {
    event_title: "Craft Beer Tasting",
    event_description:
      "Arrange a craft beer tasting event showcasing local breweries and their unique flavors. Provide a relaxed setting, knowledgeable brewers, and a range of beer samples for attendees to savor and appreciate.",
    host_id: 0,
    status: 2,
    location: "Port Adelaide",
    price: 8,
    event_photo: "TaphouseFeb21_8of29.jpg",
    time: "2023-11-11 18:30:00",
    tag_id: 1,
  },
  {
    event_title: "Culinary Workshop Series",
    event_description:
      "Host a series of culinary workshops featuring renowned chefs who will teach participants various cooking techniques and recipes. Cover a range of cuisines and provide hands-on experiences in a well-equipped kitchen.",
    host_id: 0,
    status: 0,
    location: "Adelaide Central Market",
    price: 20,
    event_photo: "culinaryworkshop.jpg",
    time: "2023-10-07 10:00:00",
    tag_id: 4,
  },
  {
    event_title: "Nature Photography Expedition",
    event_description:
      "Lead a guided photography expedition in the picturesque Adelaide Hills, allowing participants to capture stunning landscapes, flora, and fauna. Provide photography tips, explore different locations, and create lasting memories.",
    host_id: 0,
    status: 1,
    location: "Mount Barker",
    price: 25,
    event_photo: "Photography-tours-in-Estonian-wild-nature-1.jpg",
    time: "2023-07-29 07:30:00",
    tag_id: 5,
  },
  {
    event_title: "Fitness Bootcamp Challenge",
    event_description:
      "Organize an intensive fitness bootcamp that combines high-intensity workouts, team challenges, and motivational coaching. Help participants push their limits, improve their fitness levels, and achieve personal goals.",
    host_id: 0,
    status: 2,
    location: "Glenelg Beach",
    price: 15,
    event_photo: "iStock_000022266195_XXXLarge.jpg",
    time: "2023-09-02 06:00:00",
    tag_id: 3,
  },
  {
    event_title: "Artisan Market Showcase",
    event_description:
      "Curate an artisan market that celebrates local artists, craftsmen, and their unique creations. Provide stalls, live demonstrations, and interactive workshops to engage visitors and promote the local creative community.",
    host_id: 0,
    status: 0,
    location: "Adelaide Showground",
    price: 5,
    event_photo: "IMG_7922_3_yqmiew.jpg",
    time: "2023-11-25 11:00:00",
    tag_id: 6,
  },
  {
    event_title: "Outdoor Yoga Retreat",
    event_description:
      "Organize a rejuvenating outdoor yoga retreat in a serene natural setting. Offer yoga classes, meditation sessions, healthy meals, and opportunities for self-reflection and connection with nature.",
    host_id: 0,
    status: 1,
    location: "Mount Osmond",
    price: 30,
    event_photo: "outdoor Yoga.jpg",
    time: "2023-08-12 16:00:00",
    tag_id: 7,
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
