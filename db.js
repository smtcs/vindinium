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

var bot = new Bot({name: 'default', code:"var Bot = require('bot');\n var PF = require('pathfinding'); \n var bot = new Bot('nwiltp4r', 'training'); \nvar goDir;\n var Promise = require('bluebird');\n Bot.prototype.botBrain = function(){ \n  return new Promise(function(resolve, reject){ \n    _this = bot; \n/////////////Write your Bot Below Here////////////////////// \n////////////Set bot.goDir in the direction you want to go/// \n \n   \n    var rand = Math.floor(Math.random() * 3); \n    var dirs = ["north", "south", "east", "west"]; \n    bot.goDir = dirs[rand]; \n \n \n ///////////Do not remove anything below here//////////////// \n    resolve(); \n  }); \n} \n \n bot.runGame();"})
Bot.count({}).exec().then(function(c) {
  if(c < 1) {
    bot.save();
  }
}).then(null, function(err) {
  console.log(err);
});
