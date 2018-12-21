import React from 'react';
import dronePic from '../images/drone.png'

function Drone(props) {
  const styles ={
    bottom: `${props.state.forward}%`,
    left: `(${props.state.left}%)`,
    transition: `bottom 1.2s ease-in`,
    transition: `left 1.2s ease-in`,
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