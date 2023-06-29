// Handles API requests related to events, such as retrieving events, creating new events, updating events, etc.
const router = require("express").Router();
const { Event } = require("../../models");
// When a user searches for a event tag or a location direct user to the events page

//! router.get("/events") for all events that match that specific query (name)

router.get("/", async (req, res) => {
  try {
    const dbEventData = await Event.findAll({
      // where: {
      //   event_title: req.body.title,
      // },
      // include: [
      //   {
      //     model: Event,
      //     attributes: [
      //       "event_title",
      //       "event_description",
      //       "event_location",
      //       "host_id",
      //     ],
      //   },
      // ],
    });
    const event = dbEventData.map((event) => event.get({ plain: true }));
    // res.status(200).json(eventlist);
    res.render("eventDetails", { event: event });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", )

router.delete("/:id");

module.exports = router;
