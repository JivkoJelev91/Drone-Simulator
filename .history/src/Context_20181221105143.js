import React, { Component } from 'react';
const MyContext = React.createContext();

export default class Provider extends Component  {
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

export const Consumer = MyContext.Consumer;