var Bot = require('bot');
var bot = new Bot('nwiltp4r', 'training');
var goDir;
var Promise = require('es6-promise').Promise;
// bot.startGame    bot.parseTheData    bot.newRequest

Bot.prototype.botBrain = function(){
  return new Promise(function(resolve, reject){
    _this = bot;

  
    var rand = Math.floor(Math.random() * 3);
    var dirs = ["north", "south", "east", "west"];
    bot.goDir = dirs[rand];
    console.log("botBrain!: "+ bot.goDir);


    resolve();
  });
}

bot.runGame();


/*
Bot.prototype.runGame = function(){
  console.log("staring up sendREquest");
  bot.sendRequest().then(function(){
    console.log("starting up parse");
    bot.parseTheData()}).then(function(){
      console.log("starting up botbrain");
      bot.botBrain()}).then(function(){
        console.log("requestingAgain!");
       bot.requestAgain(bot.goDir)});
};

bot.runGame();
*/


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
