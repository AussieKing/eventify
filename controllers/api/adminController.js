const router = require("express").Router();
// const isAdmin = require("../../middlewares/isAdmin");
// If user is an admin load the admin page

router.get("/", (req, res) => {
  res.render("adminPage");
});

// POST to create an event
// router.post("/admin", async (req, res) => {
//   try {
//     const dbUserData = await Event.create({
//       event_title: req.body.event_title,
//       event_description: req.body.event_description,
//       host_id: req.body.host_id,
//       status: req.body.status,
//       location: req.body.location,
//       time: req.body.time,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // UPDATE to update an event
// router.post("/admin", isAdmin, async (req, res) => {});

// // DELETE to delete events / users
// router.delete("/admin/:id");

module.exports = router;
