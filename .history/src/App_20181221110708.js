import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Battery from './Buttons/Battery';
import {Provider, Consumer} from './Context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
            <Buttons />
            <div className="view">
              <Battery />
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;
