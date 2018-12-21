import React, { Component } from 'react';
import dronePic from '../images/drone.png'

class Drone extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.state.forward);
    const styles ={
      transform: `translateZ(${this.props.state.forward}px`
    }
    return (
          <div className="parentDrone">
            <div className="drone" style={styles}>
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
  }
}

export default Drone;