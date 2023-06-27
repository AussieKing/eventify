// Configures Passport.js for user authentication.
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const errorHandler = require("../middlewares/errorMiddleware");
const connections = require ('./connection');
const passport = require('passport');
const User = require('../models/user')

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  async function(email, password, done) {
    var user = await User.findOne(
      { where: {
          username: username
        }
      });
    if (user == null) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

      
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(function(user) { done(null, user); });
});

module.exports = passport;

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email);
//     if (user == null) {
//       return done(null, false, { message: "No user with that email" });
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Password incorrect" });
//       }
//     } catch (err) {
//       return done(errorHandler);
//     }
//   };

//   passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id));
//   });
// }

// module.exports = initialize;



