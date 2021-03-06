import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Welcome from './components/welcome.jsx';
import Spotify from './components/spotify.jsx';
import Weather from './components/weather.jsx';
import Lights from './components/lights.jsx';
import './styles/skeleton.css';
import './styles/normalize.css';
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <div class="one-third column">
          <Spotify />
        </div>
        <div class="one-third column">
          <Weather />
        </div>
        <div class="one-third column">
          <Lights />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
