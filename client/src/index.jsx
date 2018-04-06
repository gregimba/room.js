import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Welcome from './components/welcome.jsx';
import Spotify from './components/spotify.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spotify: false };
  }

  render() {
    return <Spotify />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
