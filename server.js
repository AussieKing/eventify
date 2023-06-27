const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(passport.initialize());
// app.use(passport.session());

app.engine("handlebars", exphbs);
app.set("view engine", "handlebars");
app.use(require("./controllers/api/index"));

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
