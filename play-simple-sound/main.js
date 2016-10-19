var player = require('play-sound')(opts = {})
var asyncWhile = require("async-while");


var myWhile = asyncWhile(function(data) {
    // synchronous conditional 
    return true;
}, function(data) {
    // loop content goes here 
player.play('../resources/klassefesten-intro.mp3', function(err){
  if (err) throw err;
});
});
