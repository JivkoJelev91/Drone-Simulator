import React, { Component } from 'react';
import dronePic from '../images/drone.png'
const MyContext = React.createContext();

class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    return (
   

          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
            <MyContext.Consumer>
              {(context) => (
                <p>Hello from {context.state} </p>
                  )}
            </MyContext.Consumer>
          </div>
    );
  }
}

export default Drone;