var express = require('express');
var router = express.Router();

/* GET index for bots */
router.get('/', function(req, res) {
  res.render('bots/index');
});

module.exports = router;
