import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Drone from './Drone'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Buttons />
          <Drone />
      </div>
    );
  }
}

export default App;
