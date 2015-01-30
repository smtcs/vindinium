var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../users');

router.get('/', function(req, res) {
  res.render('auth/index', {user: req.user});
});

router.get('/login', function(req, res) {
  res.render('auth/login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/register', function(req, res) {
  res.render('auth/register');
});

router.post('/register', function(req, res, next) {
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if (err) { return next(err); }
    res.redirect('/bots');
  });
});

module.exports = router;
