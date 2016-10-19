var express = require('express');
var app = express();

var sound_player = require('../play-simple-sound/main.js');
var light_control = require('../lights/main.js');

app.get('/party', function(req, res) {
    sound_player.play_sound();
    light_control.switch_lights();

    res.send(true);
});

app.get('/simple-sound', function(req, res) {
    sound_player.play_sound();

    res.send(true);
});

app.get('/switch-lights', function(req, res) {
    light_control.switch_lights();

    res.send(true);
});

app.listen(8080);

console.log('Listening on port 8080...');
