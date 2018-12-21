import React, { Component } from 'react';
import dronePic from '../images/drone.png'
import {CommandState} from '../ContextApi/StateContext.js';


class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    console.log(this.props);
    return (
          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
            <CommandState.Consumer>
              {(context) => (
                <p>Hello from {console.log(context)} </p>
                  )}
            </CommandState.Consumer>
          </div>
    );
  }
}

export default Drone;