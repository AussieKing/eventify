const router = require("express").Router();
// const ErrorHandler = require("../../middlewares/errorMiddleware");
const eventsRouter = require("./eventsController");
const userRouter = require("./userController");
const loginRouter = require("./loginLogoutController");
const adminRouter = require("./adminController");

router.use("/events", eventsRouter);
router.use("/login", loginRouter);
// router.use("/admin", adminRouter);

// router.use(initialize);
// router.use(ErrorHandler);

module.exports = router;
