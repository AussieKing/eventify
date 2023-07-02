const router = require("express").Router();
const { Event } = require("../../models");
const { isAdmin } = require("../../middlewares/isAdmin");

// Render the admin page IF user is admin

router.get("/", isAdmin, (req, res) => {
  try {
    res.render("adminPage");
  } catch (err) {
    document.location.replace("/");
    alert("You must be logged in to view this page.");
  }
});

// POST to create an event

router.post("/", async (req, res) => {
  try {
    const dbEventData = await Event.create({
      event_title: req.body.eventTitleEl,
      event_description: req.body.eventDescriptionEl,
      host_id: req.body.hostIDEl,
      price: req.body.eventPriceEl,
      location: req.body.eventLocationEl,
      status: req.body.eventStatusEl,
      time: req.body.eventTimeEl,
      event_photo: req.body.eventPhotoEl,
    });
    console.log(dbEventData);
    res.status(200).json(dbEventData);
  } catch (err) {
    console.log("this error");
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT to update an event

router.put("/:id", async (req, res) => {
  try {
    const eventData = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE to delete events

router.delete("/:id", async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
