var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/vind');

var BotSchema = mongoose.Schema({
  name: {type: String, default: '', unique: true},
  runs: {type: Number, default: 0},
  owner: Object,
  code: {type: String, default: ''}
});

var Bot = mongoose.model('Bot', BotSchema);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var bot = new Bot({name: 'default', code: "var Bot = require('bot').Bot;\nvar helpers = require('bot').helpers;\n\nvar bot = new Bot('YOUR_KEY_HERE', 'training');"});

Bot.count({}).exec().then(function(c) {
  if(c < 1) {
    bot.save();
  }
}).then(null, function(err) {
  console.log(err);
});
