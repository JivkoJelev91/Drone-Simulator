import React, { Component } from 'react';
import dronePic from '../images/drone.png'

function Drone(props) {
  const styles ={
    bottom: `${this.props.state.forward}%`,
    transition: `bottom 1.2s ease-in`,
  }
  return (
    <div className="parentDrone" style={styles}>
      <div className="drone" >
        <img src={dronePic} alt="drone" />
      </div>
    </div>
);
}

export default Drone;