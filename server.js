const path = require("path");
//bare minimum server.js

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

// const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => { // route handler in the controller
  res.render("home");
});

app.get("/", (req, res) => {
    const eventData = Event.findAll();  // retrieve event from the database
    res.render('main', { events: eventData }); // pass the data to view the template
})

// route handler for a specific event page
app.get('/event/:id', (req, res) => {
    const eventId = req.params.id;
  
    // retrieve event details from the database based on the event ID
    const eventData = Event.findOne({ where: { id: eventId } });
  
    // pass the data to the event-details.handlebars template
    res.render('event-details', { event: eventData });
});
  

// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log("Now listening"));
// });
