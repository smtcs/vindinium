var Bot = require('bot');
var bot = new Bot('nwiltp4r', 'training');
var goDir;
var Promise = require('es6-promise').Promise;

Bot.prototype.botBrain = function(){
  return new Promise(function(resolve, reject){
    _this = bot;
/////////////Write your Bot Below Here//////////////////////
////////////Set bot.goDir in the direction you want to go///



  
    var rand = Math.floor(Math.random() * 3);
    var dirs = ["north", "south", "east", "west"];
    bot.goDir = dirs[rand];





///////////Do not remove anything below here////////////////
    resolve();
  });
}

bot.runGame();
