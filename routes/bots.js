var express = require('express');
var router = express.Router();
var Bot = require('mongoose').model('Bot')

/* @GET index for bots */
router.get('/', function(req, res) {
  Bot.find({}, function(err, bots) {
    res.render('bots/index', {bots: bots});
  });
});

/* @GET show dahsboard for :id */
router.get('/d/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    res.render('bots/dashboard', {bot:bot});
  });
});

/* @GET show edit for :id */
router.get('/e/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    res.render('bots/editor', {
      id: req.params.id,
      code: bot.code
    });
  });
});

router.post('/e/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    
  });
});

/* @POST run bot */
router.post('/run/:id', function(req, res) {
  res.render('bots/play')
});

/* @GET redirect by id */
/* HAS TO BE LAST ROUTE IN FILE */
router.get('/:id', function(req, res) {
  res.redirect('d/'+req.params.id);
});

module.exports = router;
