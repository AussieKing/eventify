// Handles all routes related to User sign up.
const { User } = require("../../models");
const router = require("express").Router();
const bcrypt = require('bcrypt')

// When sign up button is pressed, direct User to sign up page.
// Then post request to create new User.
// automatically log in User after account has been created.

// POST route for new user signup
router.post("/signup", async (req, res) => {
  try {
    // use bcrypt to hash the new user password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const dbUserData = await User.create({
      email: req.body.email,
      password: hashedPassword
    });

    req.session.save(() => {
      req.session.loggedIn = true;

    // redirect user once signed up
    res.redirect('/login')

    // for debugging 
    res.status(200).json(dbUserData);
    // console.log(dbUserData);

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  res.render("newUser");
});

module.exports = router;
