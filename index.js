const { getWeather } = require('./helpers/weather');

const { hue } = require('./helpers/hue');

getWeather()
  .then(data => console.log(data))
  .catch(err => console.log(err));
