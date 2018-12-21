import React from 'react';
import dronePic from '../images/drone.png'

function Drone(props) {
  // const stylesForward ={
  //   bottom: `${props.state.forward}%`,
  //   transition: `bottom 1.2s ease-in`,
  // }
  // const stylesLeft = {
  //   left: `${props.state.left}%`,
  //   transition: `left 1.2s ease-in`,
  // }

  const styles = (direction, value) => {
    console.log(direction);
    return {
      direction: `${value}%`,
      transition: `${direction} 1.2s ease-in`,
    }
  }

  console.log(styles(props.state.direction, props.state[props.state.direction]));

  return (
    <div className="parentDrone" >
      <div className="drone" >
        <img src={dronePic} alt="drone" />
      </div>
    </div>
  );
}

export default Drone;