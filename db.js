var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

var BotSchema = mongoose.Schema({
  name: {type: String, default: '', unique: true},
  runs: {type: Number, default: 0},
  owner: Object,
  code: {type: String, default: ''}
});

var Bot = mongoose.model('Bot', BotSchema);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var bot = new Bot({name: 'default', code: "var Bot = require('bot');\n\nvar bot = new Bot('YOUR_KEY_HERE', 'training');\nvar helpers = bot.helpers;"});

Bot.count({}).exec().then(function(c) {
  if(c < 1) {
    bot.save();
  }
}).then(null, function(err) {
  console.log(err);
});
