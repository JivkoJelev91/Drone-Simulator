import React, { Component } from 'react';
import dronePic from '../images/drone.png'
const MyContext = React.createContext();

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
                </MyContext.Consumer>

          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
  }
}

export default Drone;