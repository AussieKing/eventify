// Handles all routes related to User sign up.
const { User } = require("../../models");
const router = require("express").Router();
const bcrypt = require('bcry')

// When sign up button is pressed, direct User to sign up page.
// Then post request to create new User.
// automatically log in User after account has been created.

router.get('/signup', function(req, res, next) {
  res.render('newUser', { });
});

router.post("/signup", async (req, res) => {


  try {
    const newUser = req.body;
     // hash the password from 'req.body' and save to newUser
     newUser.password = await bcrypt.hash(req.body.password, 10);
     // create the newUser with the hashed password and save to DB
    const dbUserData = await User.create(newUser, {
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
