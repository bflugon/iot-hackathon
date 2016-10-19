var player = require('play-sound')(opts = {})

player.play('../resources/klassefesten-intro.mp3', function(err){
  if (err) throw err;
});
