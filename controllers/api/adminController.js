const router = require("express").Router();
const { Event } = require("../../models");

// const NewEvent = async (req, res) => {
//   const dbEventData = await Event.create({
//     event_title: req.params.eventTitle,
//     event_description: ,
//     host_id: ,
//     price: ,
//     location: ,
//     status: eventStatusEl,
//     time: eventTimeEl,
//   });

//   const event = await Event.create(NewEvent);
// };

// const CreateEvent = await Event.create(NewEvent);
// const isAdmin = require("../../middlewares/isAdmin");
// If user is an admin load the admin page

const passport = require("passport");

router.get("/", async (req, res) => {
  try {
    res.render("adminPage");
  } catch (err) {
    document.location.replace('/');
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
    });
    console.log(dbEventData);
    res.status(200).json(dbEventData);
  } catch (err) {
    console.log("this error");
    console.log(err);
    res.status(500).json(err);
  }
});

// // UPDATE to update an event
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

// // DELETE to delete events / users
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
