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
    this.reload();
    setInterval(this.reload, 120000);
  }
  reload() {
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
      const page = (
        <div>
          <h3>{this.state.weather.data.main.temp}F</h3>
          <h3>{this.state.weather.data.main.humidity}%H</h3>
          <h3>{this.state.weather.data.weather[0].description}</h3>
        </div>
      );
      return page;
    } else {
      return <div class="lds-dual-ring" />;
    }
  }
}

export default Weather;
