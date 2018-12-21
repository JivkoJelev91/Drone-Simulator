import * as React from 'react';

export const commands = {
    state: {
        forward: 0,
    }
};

export const CommandState = React.createContext(
    commands.state // default value
);

