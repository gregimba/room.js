import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Welcome from './welcome.jsx';

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spotify: false };
    this.reloadCurrentSpotify = this.reloadCurrentSpotify.bind(this);
  }
  componentDidMount() {
    this.reloadCurrentSpotify();
  }

  reloadCurrentSpotify() {
    axios
      .get('/spotify')
      .then(body => {
        let next_call_ms =
          body.data.item.duration_ms - body.data.progress_ms + 100;
        let timeout = window.setTimeout(
          this.reloadCurrentSpotify,
          next_call_ms
        );
        this.setState({ spotify: body });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.spotify !== false) {
      const songArtists = this.state.spotify.data.item.artists.map(artist => (
        <li>{artist.name}</li>
      ));
      const songName = this.state.spotify.data.item.name;
      return (
        <div>
          <h1>{songName}</h1>
          <ul>{songArtists}</ul>
        </div>
      );
    } else {
      return <h1> Loading spotify </h1>;
    }
  }
}

export default Spotify;
