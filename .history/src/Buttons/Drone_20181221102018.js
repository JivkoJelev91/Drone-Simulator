import React, { Component } from 'react';
import dronePic from '../images/drone.png'


class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    console.log();
    return (
          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
  }
}

export default Drone;