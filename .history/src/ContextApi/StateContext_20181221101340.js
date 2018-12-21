import React, { Component } from 'react';
const MyContext = React.createContext();

export const commands = {
    state = {
        forward: 0,
        isActive: true,
      }
};

export const CommandState = React.createContext(
    commands.state // default value
);

