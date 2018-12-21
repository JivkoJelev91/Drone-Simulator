import React from 'react';
import dronePic from '../images/drone.png'

function Drone(props) {
  const styles = (direction, value) => {
    console.log(direction);
    return {
      [direction]: `${value}%`,
      transition: `${direction} 1.2s ease-in`,
    }
  }

  return (
    <div className="parentDrone" style={styles(props.state.direction, props.state[props.state.direction])}>
      <div className="drone" >
        <img src={dronePic} alt="drone" />
      </div>
    </div>
  );
}

export default Drone;