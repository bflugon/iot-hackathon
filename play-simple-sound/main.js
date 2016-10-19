var player = require('play-sound')(opts = {})

player.play('../resources/klassefesten-intro.mp3', function(err){
  if (err) throw err;
});

player.play('../resources/klassefesten-intro.mp3', { timeout: 300 }, function(err){
  if (err) throw err;
});
