// Handles all routes related to user sign up.
const { user } = require("../../models");
const router = require("express").Router();

// When sign up button is pressed, direct user to sign up page.
// Then post request to create new user.
// automatically log in user after account has been created.

router.post("/", async (req, res) => {
  try {
    const dbUserData = await user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
