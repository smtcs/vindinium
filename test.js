var Bot = require('bot');

var bot = new Bot('TEST KEY', 'training');

// bot test code

bot.run(function(data) {
  return 'north';
});
