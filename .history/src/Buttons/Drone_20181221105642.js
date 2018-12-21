import React, { Component } from 'react';
import dronePic from '../images/drone.png'
import { Consumer, Provider} from '../Context';

class Drone extends Component {
  constructor(){
    super()
  }
  render() {
    console.log();
    return (
      
          <div className="parentDrone">
          <Consumer>
            {(context) => 
              (<h1>{context}</h1>)
            }
          </Consumer>
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
  }
}

export default Drone;