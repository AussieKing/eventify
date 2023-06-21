const router = require("express").Router();

const eventsRoutes = require("./eventsController");
const userRoutes = require("./userController");
const loginRoute = require("./loginController");

router.use("/events", eventsRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoute);

module.exports = router;
