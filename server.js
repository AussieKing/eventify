const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create();
const controllers = require("./controllers/api/index");

const passport = require('passport');
const session = require('express-session');
const connection = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// Cookie with 24hr expiry date
let expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);

// For Passport
app.use(session({
  secret: 'keyboard cat',
  store: sessionStore,
  resave: true, 
  saveUninitialized:true,
  cookie: { expires: expireDate }
  })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(controllers);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
