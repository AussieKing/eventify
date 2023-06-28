const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create();
const controllers = require("./controllers/api/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(passport.initialize());
// app.use(passport.session());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(controllers);

// app.get('*', (req, res, next) => {
//   res.locals.header = 'header'; // Register the header partial as 'header'
//   next();
// });

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
