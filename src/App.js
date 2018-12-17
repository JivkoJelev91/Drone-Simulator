import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Battery from './Buttons/Battery';
import Drone from './Drone'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Buttons />
          <div>
            <Battery />
            <Drone />
          </div>
      </div>
    );
  }
}

export default App;
