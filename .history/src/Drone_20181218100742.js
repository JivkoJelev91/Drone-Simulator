import React, { Component } from 'react';
import dronePic from './images/drone.png'

import styled from 'styled-components';

const DroneStyle = styled.div`
  position:relative
  width:${this.state.loading}
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