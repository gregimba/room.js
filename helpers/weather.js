const weather = require('openweather-apis');
const config = require('../config');
const util = require('util');

//intial api config
weather.setLang('en');
weather.setZipCode(config.zip);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);

const getAllWeather = util.promisify(weather.getAllWeather);

// function getSunValues(value) {
//   console.log('sunrise => ' + new Date(value.sys.sunrise * 1000));
//   console.log('sunset => ' + new Date(value.sys.sunset * 1000));
// }

// getAllWeather()
//   .then(getSunValues)
//   .catch(err => console.log(err));

module.exports.getWeather = getAllWeather;
