var express = require('express');
var router = express.Router();

/* @GET index for bots */
router.get('/', function(req, res) {
  res.render('bots/index');
});

/* @GET show dahsboard for :id */
router.get('/d/:id', function(req, res) {
  res.render('bots/dashboard', {
    id: req.params.id,
    bot: {
      name: 'bot 1'
    }
  })
});

/* @GET show edit for :id */
router.get('/e/:id', function(req, res) {
  res.render('bots/editor', {
    id: req.params.id,
    code: 'db.find({id: '+req.params.id+'});'
  })
});

module.exports = router;
