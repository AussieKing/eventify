// Implements authentication middleware to protect certain routes from unauthorized access.


//Checks if user is logged in

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
