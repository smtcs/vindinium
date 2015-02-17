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
//    bot.helpers.pathfinder([3,4],[4,4]);
//    console.log("pathtogo!: " + bot.pathDir);
    console.log(bot.map);
    console.log("bot id: " + bot.yourBot.id);
    console.log("yourbot Pos : " + bot.yourBot.pos.x, bot.yourBot.pos.y);
    console.log("bot 3 pos : " + bot.bot3.pos.x, bot.bot3.pos.y);
    console.log("pathtogo!:  " + bot.pathDir );
   // console.log("tarven position : " + _this.taverns[0]);

    bot.goDir = bot.pathfinder([bot.yourBot.pos.x, bot.yourBot.pos.y], [8,6]);
    console.log("going this direction!" + bot.goDir);


///////////Do not remove anything below here////////////////
   
    resolve();
  });
}

bot.runGame();
