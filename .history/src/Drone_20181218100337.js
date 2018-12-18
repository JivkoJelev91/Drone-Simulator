import React, { Component } from 'react';
import dronePic from './images/drone.png'

import styled from 'styled-components';

const DroneStyle = styled.div`
  position:relative
  width:90%
`;

class Drone extends Component {
  render() {
    return (
    <DroneStyle>
      <div className="drone">
        <img src={dronePic} alt="drone"/>
      </div>
    </DroneStyle>
    );
  }
}

export default Drone;