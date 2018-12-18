import React, { Component } from 'react';
import dronePic from './images/drone.png'
import styled from 'styled-components';


class Drone extends Component {
  constructor(){
    super()
    this.state = {loading: 60};
  }
  render() {
    return (
    <div>
      <div className="drone">
        <img src={dronePic} alt="drone"/>
      </div>
    </div>
    );
  }
}

export default Drone;