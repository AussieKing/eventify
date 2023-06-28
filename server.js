const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create();
const controllers = require("./controllers/api/index");

const passport = require('passport');
const session = require('express-session');
const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public")));

// For Passport & session
const sess = {
  secret: 'noot noot',
  resave: true, 
  saveUninitialized: true,
  // cookie expires in 1 day
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
  // store: new SequelizeStore({
  //   db: sequelize,
  // }),
};


app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(controllers);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
