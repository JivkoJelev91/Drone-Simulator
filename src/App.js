import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Battery from './Buttons/Battery';
import Drone from './Buttons/Drone'
import styled from 'styled-components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Buttons />
          <div className="view">
            <Battery />
            <Drone />
          </div>
      </div>
    );
  }
}

export default App;
