var Bot = require('bot');

var bot = new Bot('nwiltp4r', 'training');
var goDir;
console.log(bot);
// bot test code
function botStart(callback){
  console.log("going to run bot!");
    bot.run(function(){
      console.log("going to run afterPostRequest!");
      bot.afterPostRequest(function(){
        console.log("going to run botBrain!");
        botBrain(function(){
          bot.requestAgain(goDir, botContinue());      
        });
      });
    });
}

function botContinue(callback){
  bot.afterPostRequest(function(){
    botBrain(function(){
      console.log(bot.map);
      bot.requestAagain(goDir, botContinue());
    });
  });
}


function botBrain(cb){
  goDir = "north";







  cb();
}

botStart();

/*
bot.run(function(data) {
  return 'north';
});
*/
