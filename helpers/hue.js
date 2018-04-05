const huejay = require('huejay');
const config = require('../config');

const client = new huejay.Client({
  host: config.hue,
  port: 80,
  username: config.user,
  timeout: 15000
});

module.exports.hue = client;
