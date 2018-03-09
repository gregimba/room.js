var weather = require('openweather-apis');
const config = require('./config')

weather.setLang('en');
weather.setZipCode(78701);
weather.setUnits('imperial');
weather.setAPPID(config.openweather);


weather.getAllWeather((err, JSONObj) => {
  if(err) console.log(err);
  else console.log(JSONObj);
});
