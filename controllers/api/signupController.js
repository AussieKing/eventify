// Handles all routes related to User sign up.
const { User } = require("../../models");
const router = require("express").Router();
const bcrypt = require('bcry')

// When sign up button is pressed, direct User to sign up page.
// Then post request to create new User.
// automatically log in User after account has been created.

router.post("/", async (req, res) => {
  // try {
  //   const dbUserData = await User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  //   req.session.save(() => {
  //     req.session.loggedIn = true;
  //     res.status(200).json(dbUserData);
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

router.get("/", async (req, res) => {
  res.render("newUser");
});

module.exports = router;
