import React, { Component } from 'react';
import dronePic from './images/drone.png'

class Drone extends Component {
  constructor(){
    super()
    this.state = {loading: 60};
  }
  render() {
    return (
    <div>
      <div className="drone">
        <img src={dronePic} alt="drone"/>
      </div>
    </div>
    );
  }
}

export default Drone;