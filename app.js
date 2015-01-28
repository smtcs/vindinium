var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var bots = require('./routes/bots');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
// use the dev logger
app.use(logger('dev'));
// bodyparser json middleware
app.use(bodyParser.json());
// bodyparser urlencoding middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse cookies
app.use(cookieParser());
// use less stylesheets
app.use(require('less-middleware')(path.join(__dirname, 'public')));
// serve files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/bots', bots);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
