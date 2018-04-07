import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: false };

    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    this.reload()
    setInterval(this.reload, 120000);
  }
  reload() {
    console.log("getting weather");
    axios
      .get('/weather')
      .then(body => {
        this.setState({ weather: body });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.weather !== false) {
      const test = <div>{this.state.weather.data.main.temp}F {this.state.weather.data.main.humidity}%H {this.state.weather.data.weather[0].description}</div>;
      return test;
    } else {
      return <h1> loading </h1>;
    }
  }
}

export default Weather;
