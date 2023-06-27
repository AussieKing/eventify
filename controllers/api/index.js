const router = require("express").Router();
// const ErrorHandler = require("../../middlewares/errorMiddleware");
const eventsRouter = require("./eventsController");
const loginRouter = require("./loginLogoutController");
// const adminRouter = require("./adminController");
const homeController = require("./homeController");

router.use("/events", eventsRouter);
router.use("/login", loginRouter);
router.use("/", homeController);
// router.use("/admin", adminRouter);

// router.use(initialize);
// router.use(ErrorHandler);

module.exports = router;
