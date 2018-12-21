import React, { Component } from 'react';
const MyContext = React.createContext();

export class MyProvider extends Component  {
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

export const MyContext = MyContext.Consumer;