import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
            <Buttons />
        </div>
      </Provider>
    );
  }
}

export default App;
