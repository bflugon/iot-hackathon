var exports = module.exports = {};
var request = require('request');

var light = true;
var count = 0;

var lights = ['2-0-37'];

function getUrl (id) {
    return 'http://admin:WelcometoCX01@10.0.1.16:8083/ZAutomation/api/v1/devices/ZWayVDev_zway_' + id + '/command/';
};

function changeLights (status) {
    for (var i = 0; i < lights.length; i++) {
        request(getUrl(lights[i]) + status);
    }

    setTimeout(switchLights, 100);
}

function switchLights () {
    light = !light;

    count++;

    if (count >= 200) {
        return;
    }

    if (!light) {
        changeLights('on');
    } else {
        changeLights('off');
    }
}

exports.switch_lights = switchLights;
