let weather = require('openweather-apis');
let huejay = require('huejay');

const config = require('./config')

//intial api config
weather.setLang('en');
weather.setZipCode(78701);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);

getWeather () => {
  return new Promise((resolve, reject) => {
    weather.getAllWeather((err, JSONObj) => {
      resolve(JSONObj);
      reject(err);
    });
  });
}

getSunValues (value) => {
  console.log("sunrise => " + new Date(value.sys.sunrise * 1000))
  console.log("sunset => " + new Date(value.sys.sunset * 1000))
}

getWeather()
  .then((res) => getSunValues(res),
    (err) => console.log("rejected: ", err));
