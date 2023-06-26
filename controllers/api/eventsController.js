// Handles API requests related to events, such as retrieving events, creating new events, updating events, etc.
const router = require("express").Router();
const { Event } = require("../../models");
// When a user searches for a event tag or a location direct user to the events page

//! router.get("/events") for all events that match that specific query (tags)

router.get("/", async (req, res) => {
  try {
    const dbEventData = await Event.findAll({
      where: {
        event_tag: req.body.tag,
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
    res.render("events", { event });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
