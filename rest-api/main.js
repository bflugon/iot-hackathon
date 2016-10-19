var express = require('express');
var app = express();

var sound_player = require('../play-simple-sound/main.js');

app.get('/simple-sound', function(req, res) {
    sound_player.play_sound();

    res.send(true);
});

app.listen(8080);

console.log('Listening on port 8080...');
