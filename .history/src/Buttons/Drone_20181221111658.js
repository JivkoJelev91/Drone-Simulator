import React, { Component } from 'react';
import dronePic from '../images/drone.png'

function Drone(props){
    console.log(props);
    return (
          <div className="parentDrone">
            <div className="drone">
              <img src={dronePic} alt="drone"/>
            </div>
          </div>
    );
}

export default Drone;