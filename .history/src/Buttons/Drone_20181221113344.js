import React, { Component } from 'react';
import dronePic from '../images/drone.png'

class Drone extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.state.forward);
    const styles ={
      transform: `transition translateY(-${this.props.state.forward}px`,
      transition: `translateY 2s`
    }
    return (
          <div className="parentDrone">
            <div className="drone" >
              <img src={dronePic} alt="drone" style={styles}/>
            </div>
          </div>
    );
  }
}

export default Drone;