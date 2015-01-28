var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Example of express routes*/
router.get('/hi/:name', function(req, res) {
  res.render('hello', { name: req.params.name });
});

module.exports = router;
