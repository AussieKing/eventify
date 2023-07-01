const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    // session flag into template
    res.render('home', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
