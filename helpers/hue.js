const huejay = require('huejay');
const config = require('../config');

//inital hue client
let client = new huejay.Client({
  host: config.hue,
  port: 80, // Optional
  username: config.user, // Optional
  timeout: 15000 // Optional, timeout in milliseconds (15000 is the default)
});

client.groups
  .getById(1)
  .then(group => {
    console.log(`Saving group...`);

    group.incrementHue = 6500;
    group.incrementSaturation = 25;
    group.transitionTime = 0;
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
