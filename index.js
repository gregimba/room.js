let weather = require('openweather-apis');
const config = require('./config')

//intial api config
weather.setLang('en');
weather.setZipCode(78701);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);



function getWeather() {
  return new Promise((resolve,reject) => {
    weather.getAllWeather((err, JSONObj) => {
      resolve(JSONObj);

      reject(err);
    });
  });
}

function getSunValues(value) {
  console.log("Sunrise => " + new Date(value.sys.sunrise * 1000))
  console.log("sunset => " + new Date(value.sys.sunset * 1000))
}

getWeather().then((currentWeather) => getSunValues(currentWeather));
