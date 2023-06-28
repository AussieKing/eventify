// Handles all request related to log in
const { User } = require("../../models");
const router = require("express").Router();

// When login button is pressed, direct to login page.
//Then POST request to recieve login details and check them against the data base.
//If match, save session, give user access to other web pages (set loggedIn as true)

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({
        message:
          "You have entered an incorrect email or password. Please try again!",
      });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message:
          "You have entered an incorrect email or password. Please try again!",
      });

      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Log user out, destroy session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
