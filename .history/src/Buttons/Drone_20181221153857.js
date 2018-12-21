import React from 'react';
import dronePic from '../images/drone.png'

function Drone(props) {
  const stylesForward ={
    bottom: `${props.state.forward}%`,
    transition: `bottom 1.2s ease-in`,
  }
  const stylesLeft = {
    left: `${props.state.left}%`,
    transition: `left 1.2s ease-in`,
  }

  return (
    <div className="parentDrone" style={stylesForward}>
      <div className="drone" >
        <img src={dronePic} alt="drone" />
      </div>
    </div>
  );
}

export default Drone;