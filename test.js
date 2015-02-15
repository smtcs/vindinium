var Bot = require('bot');
var bot = new Bot('nwiltp4r', 'training');
var _this = bot;
var goDir;
// bot.startGame    bot.parseTheData    bot.newRequest


Bot.prototype.botBrain = function(){
  //console.log("botBrain!");
  var rand = Math.floor(Math.random() * 3);
  var dirs = ["north", "south", "east", "west"];
  bot.goDir = dirs[rand];

}

bot.runBot();
  





////VERSION THAT CALLS ITSELF TOO MANY TIMES/////
/*
var goDir;
//console.log(bot);
// bot test code
function botStart(callback){
 // console.log("going to run bot!");
    bot.startGame(function(){
     // console.log("going to run afterPostRequest!");
      bot.parseTheData(function(){
      //  console.log("going to run botBrain!");
        botBrain(function(){
          bot.requestAgain(goDir, botContinue());      
        });
      });
    });
}

function botContinue(callback){
  //console.log("bot Continiue!");
  bot.parseTheData(function(){
    botBrain(function(){
      bot.requestAagain(goDir, botContinue());
    });
  });
}


function botBrain(cb){
  //console.log("botBrain!");
  var rand = Math.floor(Math.random() * 3);
  var dirs = ["north", "south", "east", "west"];
  goDir = dirs[rand];

  //console.log(goDir);

  cb();
}

botStart();
*/


///// OLD VERSION /////
/*
bot.run(function(data) {
  return 'north';
});
*/
