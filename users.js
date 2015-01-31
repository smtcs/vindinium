var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
  bots: Array,
  admin: {type: Boolean, default: false}
});

User.plugin(passportLocalMongoose);

mongoose.model('User', User);
