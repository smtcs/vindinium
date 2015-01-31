var User = require('mongoose').model('User');

function loggedIn(req, res, next) {
  if(req.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}

function isAdmin(req, res, next) {
  User.findById(req.user._id).exec().then(function(user) {
    if(user.admin) {
      next();
    } else {
      res.redirect('/bots');
    }
  });
}

module.exports = {
  loggedIn: loggedIn,
  isAdmin: isAdmin
};
