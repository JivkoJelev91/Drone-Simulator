import React, { Component } from 'react';
import dronePic from './images/drone.png'

class Drone extends Component {
  render() {
    return (
      <div className="drone">
        <img src={dronePic} alt="drone"/>
      </div>
    );
  }
}

export default Drone;