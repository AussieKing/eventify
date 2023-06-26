// Contains routes for handling event-related API endpoints like /events, /events/:id, etc.
const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const eventController = require("../controllers/eventController");

// GET request for list of all events
router.get("/", (req, res) => {
  knex("events")
    .select("*")
    .then((events) => {
      res.render("events", { events: events });
    });
});

// GET request for a specific event
router.get("/:id", (req, res) => {
  eventController.getEvent(req, res);
});

// GET request for creating an event
router.get("/new", (req, res) => {
  res.render("newEvent");
});

// POST request for creating an event
router.post("/new", (req, res) => {
  eventController.createEvent(req, res);
});

// validating new event doesn't return null
function validNewEvent(event) {
  return (
    typeof event.title == "string" && //is the new event a string?
    event.title.trim() != "" && // is the string empty?
    typeof event.description == "string" &&
    event.description.trim() != "" &&
    typeof event.location == "string" &&
    event.location.trim() != "" &&
    typeof event.date == "string" &&
    event.date.trim() != ""
  );
}
router.post("new", (req, res) => {
  if (validNewEvent(req.body)) {
    const event = {
      title: req.body.title.trim(),
      description: req.body.description.trim(),
      location: req.body.location.trim(),
      date: req.body.date.trim(),
    };
    // insert into db  by asking knex to give the id of the new event we just created
    knex("events")
      .insert(event, "id")
      .then((ids) => {
        const id = ids[0];
        res.redirect(`/events/${id}`);
      });
  } else {
    // respond with an error
    res.status(500);
    res.render("error", {
      message: "Invalid new event",
    });
  }
});

module.exports = router;
