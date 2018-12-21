import * as React from 'react';

export const commands = {
    forward: 0,
};

export const CommandState = React.createContext(
    commands.forward // default value
);

