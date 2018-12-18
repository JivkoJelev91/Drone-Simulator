import React, { Component } from 'react';
import dronePic from './images/drone.png'

import styled from 'styled-components';

function getWidth() {
  return 20;
}

const DroneStyle = styled.div`
  position:relative
  width:${getWidth()}%
`;



class Drone extends Component {
  constructor(){
    super()
    this.state = {loading: 60};
  }
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