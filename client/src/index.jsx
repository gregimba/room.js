import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spotify: false };
  }
  componentDidMount() {
    axios
      .get('/spotify')
      .then(body => {
        console.log(body);
        this.setState({ spotify: body });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.spotify !== false) {
      const songArtists = this.state.spotify.data.item.artists.map((artist) =>
        <li>{artist.name}</li>
      );
      const songName = this.state.spotify.data.item.name;
      return (
        <div>
        <h1>{songName}</h1>
        <ul>{songArtists}</ul>
        </div>
      )
    } else {
      return <h1> Loading </h1>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
