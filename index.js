let weather = require('openweather-apis');
let huejay = require('huejay');

const config = require('./config')

//intial api config
weather.setLang('en');
weather.setZipCode(78701);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);

let client = new huejay.Client({
  host:     config.hue,
  port:     80,               // Optional
  username: config.user, // Optional
  timeout:  15000,            // Optional, timeout in milliseconds (15000 is the default)
});


getWeather  => {
  return new Promise((resolve, reject) => {
    weather.getAllWeather((err, JSONObj) => {
      resolve(JSONObj);
      reject(err);
    });
  });
}

getSunValues: (value) => {
  console.log("sunrise => " + new Date(value.sys.sunrise * 1000))
  console.log("sunset => " + new Date(value.sys.sunset * 1000))
}

// getWeather()
//   .then((res) => getSunValues(res),
//     (err) => console.log("rejected: ", err));
client.groups.getById(1)
  .then(group => {
    console.log(`Saving group...`);

    group.incrementHue        = 6500;
    group.incrementSaturation = 25;
    group.transitionTime      = 0;
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
