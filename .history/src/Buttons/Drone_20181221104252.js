import React, { Component } from 'react';
import dronePic from '../images/drone.png'
const MyContext = React.createContext();

class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    console.log();
    return (
          <MyContext.Consumer>
            {(context) => 
              (<h1>{context}</h1>)
            }
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