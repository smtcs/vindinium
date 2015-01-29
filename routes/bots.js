var express = require('express');
var router = express.Router();
var Bot = require('mongoose').model('Bot');
var jobs = require('../queue').jobs;

/* @GET index for bots */
router.get('/', function(req, res) {
  Bot.find({}, function(err, bots) {
    res.render('bots/index', {bots: bots});
  });
});

/* @GET show dahsboard for :id */
router.get('/dashboard/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    res.render('bots/dashboard', {bot:bot});
  });
});

/* @GET show edit for :id */
router.get('/edit/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    res.render('bots/editor', {
      id: req.params.id,
      code: bot.code
    });
  });
});

/* @POST update file */
router.post('/edit/:id', function(req, res) {
  Bot.findById(req.params.id, function(err, bot) {
    bot.code = req.body.code;
    bot.save(function (err) {
      if (err) return handleError(err);
      res.redirect(req.params.id);
    });
  });
});

/* @POST run bot */
router.post('/run/:id', function(req, res) {
  // find bot in db and assign contets to `bot`
  Bot.findById(req.params.id, function(err, bot) {
    // create job wit hthe job queue
    var job = jobs.create('run bot', {
      title: bot.name,
      code: bot.code
    });
    job.save();
    // bug in kue makes it so I have to wait a few ms before the job.id works
    setTimeout(function() {
      res.send('Job with id '+job.id+' started');
    }, 50);
  });
});

/* @GET redirect by id */
/* HAS TO BE LAST ROUTE IN FILE */
router.get('/:id', function(req, res) {
  res.redirect('dashboard/'+req.params.id);
});

module.exports = router;
