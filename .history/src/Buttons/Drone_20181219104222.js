import React, { Component } from 'react';
import dronePic from '../images/drone.png'

class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <MyContext.Consumer>
          {(context) => (
            <p>Hello from {context} </p>
          )}
          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
      </MyContext.Consumer>
    );
  }
}

export default Drone;