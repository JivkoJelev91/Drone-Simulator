import React, { Component } from 'react';
import dronePic from './images/drone.png'

import styled from 'styled-components';

const DroneStyle = styled.div`
  position:relative
`;

class Drone extends Component {
  render() {
    return (
    <div className="parentDrone">
      <div className="drone">
        <img src={dronePic} alt="drone"/>
      </div>
    </div>
    );
  }
}

export default Drone;