export const commands = {
    state: {
        forward: 0,
    }
};

export const CommandState = React.createContext(
    commands.dark // default value
);