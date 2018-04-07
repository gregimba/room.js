require('dotenv').config();
const util = require('util');
const request = require('request');

function log(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body));
  }
}

getCurrentlyPlaying = (token, callback) => {
  const options = {
    url: 'https://api.spotify.com/v1/me/player/currently-playing?market=ES',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  request(options, callback);
};

getAccessToken = (refresh_token, callback) => {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        `Basic ${
          new Buffer(`${process.env.client_id}:${process.env.client_secret}`).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      callback(access_token);
    } else {
      console.log(error);
    }
  });
};

getSong = (callback) => {
  getAccessToken(process.env.refresh_token, (token) => {
    getCurrentlyPlaying(token, callback);
  });
};

module.exports.getSong = util.promisify(getSong);
