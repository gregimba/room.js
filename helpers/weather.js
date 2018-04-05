const weather = require('openweather-apis');
const config = require('../config');
const util = require('util');

//intial api config
weather.setLang('en');
weather.setZipCode(config.zip);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);

module.exports.getWeather = util.promisify(weather.getAllWeather);
