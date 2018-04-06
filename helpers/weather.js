require('dotenv').config();
const weather = require('openweather-apis');
const util = require('util');

//intial api config
weather.setLang('en');
weather.setZipCode(process.env.zip);
weather.setUnits('imperial');
weather.setAPPID(process.env.openweather);

module.exports.getWeather = util.promisify(weather.getAllWeather);
