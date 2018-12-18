import styled from 'styled-components';
import React  from 'react';
import Commands from './Commands.js'


const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  grid-gap: 3px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #fe2c70;
    border: 4px solid transparent;
    color: white;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: #ffc600;
    }
    &.takeoff {
      background: #41c7ff;
    }
    &.land {
      background: #00ff00;
    }
    &.emergency {
      background: orange;
      text-transform: uppercase;
      color: black;
    }
    &.rotate {
      background: #00fff9;
      color: black;
    }
    &.height {
      background: #fff;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .center {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }
  h2 {
    grid-column: 1 / -1;
    background: #ffc600;
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    color: black;
  }
`;

// function (command) {
//   return function() {
//     console.log(`Sending the command ${command}`);
//     socket.emit('command', command);
//   };
// }

const amount = 100;
let counter = 0;
const Buttons = () => (
  <CommandGrid>
    <button className="rotate" onClick={Commands.rotate}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={Commands.forward(counter)}>
      <span className="symbol">↑</span> forward {amount}cm
    </button>
    <button className="rotate" onClick={Commands.rotate}>
      <span className="symbol">⟳</span> 15°
    </button>
    <button onClick={Commands.left}>
      <span className="symbol">←</span> left {amount}cm
    </button>
    <div className="center">
      <button className="takeoff" onClick={Commands.takeOff}>
        Take Off
      </button>
      <button className="land" onClick={Commands.land}>
        Land
      </button>
      <button className="emergency" onClick={Commands.emergency}>
        !! emergency !!
      </button>
    </div>
    <button onClick={Commands.right}>
      <span className="symbol">→</span>
      right {amount}cm
    </button>
    <button className="height" onClick={Commands.hight}>
      <span className="symbol">⤒</span> {amount}cm
    </button>
    <button onClick={Commands.back}>
      <span className="symbol">↓</span> back {amount}cm
    </button>
    <button className="height" onClick={Commands.low}>
      <span className="symbol">⤓</span> {amount}cm
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={Commands.flipLeft}>Flip Left</button>
    <button onClick={Commands.flipRight}>Flip Right</button>
    <button onClick={Commands.flipBack}>Flip Back</button>
    <button onClick={Commands.flipForward}>Flip Forward</button>
    <button onClick={console.log('TODO')}>Go 25 25 25 25</button>
    <button onClick={console.log('TODO')}>
      Curve!
    </button>
  </CommandGrid>
);

export default Buttons;