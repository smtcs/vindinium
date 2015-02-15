var Bot = require('bot');
var bot = new Bot('nwiltp4r', 'training');
var goDir;
var Promise = require('bluebird');

Bot.prototype.botBrain = function(){
  return new Promise(function(resolve, reject){
    _this = bot;
/////////////Write your Bot Below Here//////////////////////
////////////Set bot.goDir in the direction you want to go///



  
    var rand = Math.floor(Math.random() * 3);
    var dirs = ["north", "south", "east", "west"];
    bot.helpers.pathfinder([3,4],[4,4]);
    console.log("pathtogo!: " + bot.pathDir);
console.log(bot.map);
console.log("bot id: " + bot.yourBot.id);
    bot.helpers.pathfinder([bot.yourBot.pos.x, bot.yourBot.pos.x], [4,6]);
    console.log("pathtogo!:  " + bot.pathDir );



    bot.goDir = dirs[rand];





///////////Do not remove anything below here////////////////
   
    resolve();
  });
}

bot.runGame();
