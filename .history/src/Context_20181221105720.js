import React, { Component } from 'react';
const MyContext = React.createContext();

export class Provider extends Component  {
    this.state = {
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