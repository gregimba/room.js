import React from 'react';
import axios from 'axios';

class Lights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lights: true };
  }

  toggle(event) {
    if (this.state.lights) {
      this.setState({ lights: false });
    } else {
      this.setState({ lights: true });
    }
    axios({
      method: 'post',
      url: '/toggle',
      data: {
        toggle: this.state.lights
      }
    });
  }

  render() {
    return (
      <div id="pad">
        <input id="toggle" type="checkbox" onClick={this.toggle.bind(this)} />
      </div>
    );
  }
}

export default Lights;
