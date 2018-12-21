import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Battery from './Buttons/Battery';
import Drone from './Buttons/Drone'
import styled from 'styled-components';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component  {
    state = {
        forward: 0,
        isActive: true,
      }

    render(){
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
};

 
class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="App">
          <Buttons />
          <div className="view">
            <Battery />
            <Drone />
          </div>
      </div>
      </MyProvider>
    );
  }
}

export default App;
