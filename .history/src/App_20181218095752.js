import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Battery from './Buttons/Battery';
import Drone from './Drone'
import styled from 'styled-components';
import './App.css';

const View = styled.div`
  display:flex;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Buttons />
          <View>
            <Battery />
            <Drone />
          </View>
      </div>
    );
  }
}

export default App;
