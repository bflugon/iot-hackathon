var request = require('request');



var light = true;
for (i = 0; i < 10000; i++) {
light = !light
if (light) {
request('http://10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_2-0-37/command/on', function (error, response, body) {
  //if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage. 
  }
}
else {
request('http://10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_2-0-37/command/off', function (error, response, body) {
  //if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage. 
  }
}
setTimeout();
}
