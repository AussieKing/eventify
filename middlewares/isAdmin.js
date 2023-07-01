const isAdmin = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in || req.session.admin !== 1) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = { isAdmin };
  