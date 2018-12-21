import React, { Component } from 'react';
import dronePic from '../images/drone.png'
import {CommandState} from '../ContextApi/StateContext.js';


class Drone extends Component {
  constructor(props){
    super(props)
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
                <Component {...props}  context={console.log(context)} />
                  )}
            </CommandState.Consumer>
          </div>
    );
  }
}

export default Drone;