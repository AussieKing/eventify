// Handles API requests related to events, such as retrieving events, creating new events, updating events, etc.
const router = require("express").Router();
const { Event } = require("../../models");
// When a user searches for a event tag or a location direct user to the events page

//! router.get("/events") for all events that match that specific query (location &/or tags)

router.get("/", withAuth, async (req, res) => {
  try {
    const dbEventData = await event.findAll({
      where: {
        tag_name: "",
      },

      include: [
        {
          model: Event,
          attributes: [
            "event_name",
            "event_description",
            "event_location",
            "host_name",
          ],
        },
      ],
    });

    const event = dbEventData.map((event) => event.get({ plain: true }));
    res.render("events", {
      event,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
