var Bot = require('bot');
var PF = require('pathfinding');
var bot = new Bot('YOUR_KEY_HERE', 'training');
var goDir;
var Promise = require('bluebird');

Bot.prototype.botBrain = function(){
  return new Promise(function(resolve, reject){
    _this = bot;
    /* Write your bot below Here */
    /* Set `bot.goDir` in the direction you want to go */


    var rand = Math.floor(Math.random() * 3);
    var dirs = ["north", "south", "east", "west"];
    bot.goDir = dirs[rand];


    /* DON'T REMOVE ANTYTHING BELOW THIS LINE */
    resolve();
  });
}

bot.runGame();
