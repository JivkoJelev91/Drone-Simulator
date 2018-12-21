import React, { Component } from 'react';
import dronePic from '../images/drone.png'

class Drone extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.state.forward);
    return (
          <div className="parentDrone">
            <div className="drone" style={{transform: translateZ('-100px')}}>
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
  }
}

export default Drone;