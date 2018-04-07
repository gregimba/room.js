require('dotenv').config();
const { getWeather } = require('./helpers/weather');
const { getSong } = require('./helpers/spotify');
const hue = require('./helpers/hue');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, './client/dist')));
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

app.post('/toggle', (req, res) => {
  hue.toggle(req.body.toggle);
  res.json({ toggle: req.body.toggle });
});

app.get('/weather', (req, res) => {
  getWeather().then(data => res.json(data));
});

app.get('/spotify', (req, res) => {
  getSong().then(data => res.json(JSON.parse(data.body)));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
