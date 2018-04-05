const { getWeather } = require('./helpers/weather');
const hue = require('./helpers/hue');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/rainbow', (req, res) => {
  hue.rainbow();
  res.send('sit back and relax!');
});

app.get('/status', (req, res) => {
  hue.lightStatus(status => res.json(status));
});

app.post('/status', (req, res) => {
  hue.setLights(req.body);
  res.status(201);
  res.json({ done: true });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
