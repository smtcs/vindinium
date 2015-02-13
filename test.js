var Bot = require('bot');

var bot = new Bot('TEST KEY', 'training');
console.log(bot);
// bot test code
function botInitialization(callback){
  console.log("going to run bot! " + bot.mode);
    bot.run(function(){
      console.log("going to run afterPostRequest! " + bot.data);
      bot.afterPostRequest(function(){
        console.log("going to run botBrain! " + bot.data);
        botBrain(callback);
      });
    });

}

function botBrain(){
  return 'north';
}

botInitialization(function(){console.log("finishedCycle!")});

/*
bot.run(function(data) {
  return 'north';
});
*/
