const huejay = require('huejay');
const config = require('../config');

const client = new huejay.Client({
  host: config.hue,
  port: 80,
  username: config.user,
  timeout: 15000
});

toggle = which => {
  client.groups
    .getById(1)
    .then(group => {
      group.on = which;
      return client.groups.save(group);
    })
    .then(group => {})
    .catch(error => {
      console.log(error.stack);
    });
};

rainbow = () => {
  client.groups
    .getById(1)
    .then(group => {
      console.log(`Saving group...`);
      group.on = true;
      group.effect = 'colorloop';
      group.brightness = 50;

      return client.groups.save(group);
    })
    .then(group => {
      console.log('New hue:', group.hue);
      console.log('New saturation:', group.saturation);
    })
    .catch(error => {
      console.log(error.stack);
    });
};

lightStatus = callback => {
  client.groups.getById(1).then(group => {
    callback(group.action.attributes);
  });
};

setLights = color => {
  client.groups
    .getById(1)
    .then(group => {
      group.on = true;
      group.brightness = color.brightness; //0-254
      group.hue = color.hue; //0 to 65535
      group.saturation = color.saturation; //0-254
      group.colorTemp = color.colorTemp; //153 to 500

      return client.groups.save(group);
    })
    .then(group => {})
    .catch(error => {
      console.log(error.stack);
    });
};

module.exports.setLights = setLights;
module.exports.lightStatus = lightStatus;
module.exports.rainbow = rainbow;
module.exports.hue = client;
module.exports.toggle = toggle;
