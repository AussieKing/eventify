// Handles all routes related to User sign up.
const { User } = require("../../models");
const router = require("express").Router();
const bcrypt = require('bcrypt')

// When sign up button is pressed, direct User to sign up page.
// Then post request to create new User.
// automatically log in User after account has been created.

// router.post("/", async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     req.session.save(() => {
//       req.session.logged_in = true;
//       res.status(200).json(dbUserData);


// // POST route for new user signup
// router.post("/newuser", async (req, res) => {
//   try {

//     req.session.save(() => {
//       req.session.logged_in = true;

//     // redirect user once signed up
//     res.redirect('/')

//     // for debugging 
//     res.status(200).json(dbUserData);
//     // console.log(dbUserData);


//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    // build a new instance of user model (from existing user)
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  res.render("newUser");
});

module.exports = router;
