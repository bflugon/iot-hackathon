var exports = module.exports = {};
var player = require('play-sound')(opts = {});

function play_sound () {
    player.play('../resources/klassefesten-intro.mp3', function(err){
        if (err) throw err;
    });
}

exports.play_sound = play_sound;
