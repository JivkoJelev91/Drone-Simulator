import React, { Component } from 'react';

export const commands = {
    state: {
        forward: 0,
    }
};

export const CommandState = createContext(
    commands.state // default value
);

