var request = require('request');

var light = true;
var count = 0;

function reRun () {
    setTimeout(changeLightStatus, 1);
}

function changeLightStatus () {
    light = !light;

    count++;

    if (count === 100) {
        return;
    }

    if (light) {
        request('http://10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_2-0-37/command/on', function (error, response, body) {
            reRun();
        });
    } else {
        request('http://10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_2-0-37/command/off', function (error, response, body) {
            reRun();
        });
    }
}
