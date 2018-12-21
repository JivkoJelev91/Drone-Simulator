import React, { Component } from 'react';
import dronePic from '../images/drone.png'
import {CommandState} from '../ContextApi/StateContext.js';


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
            <CommandState.Consumer>
              {(context) => (
                <p>Hello from {context.forward} </p>
                  )}
            </CommandState.Consumer>

            <CommandState.Consumer>
              {({ context }) =>
                <p> Hello from the other side {context}</p> 
              }
            </CommandState.Consumer>
          </div>
    );
  }
}

export default Drone;