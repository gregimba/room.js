const { getWeather } = require('./helpers/weather');

getWeather()
  .then(data => console.log(data))
  .catch(err => console.log(err));
