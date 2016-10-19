var player = require('play-sound')(opts = {})
var async = require('async')

async.whilst(true,
player.play('../resources/klassefesten-intro.mp3', function(err){
  if (err) throw err;
});)
