import React, { Component } from 'react';
import dronePic from '../images/drone.png'

class Drone extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.state.forward);
    const styles ={
      bottom: `${this.props.state.forward}%`,
      transition: `bottom 1.5s ease-in`,
    }
    return (
          <div className="parentDrone" style={styles}>
            <div className="drone" >
              <img src={dronePic} alt="drone" />
            </div>
          </div>
    );
  }
}

export default Drone;