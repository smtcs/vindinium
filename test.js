var Bot = require('bot');

var bot = new Bot('nwiltp4r', 'training');
var goDir;
//console.log(bot);
// bot test code
function botStart(callback){
 // console.log("going to run bot!");
    bot.run(function(){
     // console.log("going to run afterPostRequest!");
      bot.afterPostRequest(function(){
      //  console.log("going to run botBrain!");
        botBrain(function(){
          bot.requestAgain(goDir, botContinue());      
        });
      });
    });
}

function botContinue(callback){
  //console.log("bot Continiue!");
  bot.afterPostRequest(function(){
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

/*
bot.run(function(data) {
  return 'north';
});
*/
