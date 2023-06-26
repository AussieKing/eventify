const router = require("express").Router();

import ErrorHandler from "../../middlewares/errorMiddleware";

const eventsRoutes = require("./eventsController");
const userRoutes = require("./userController");
const loginRoute = require("./loginController");

router.use("/events", eventsRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoute);
router.use(initialize)
router.use(ErrorHandler);




module.exports = router;
