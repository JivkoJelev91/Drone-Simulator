// import styled from 'styled-components';
import React, { Component}  from 'react';


const CommandGrid = divStyle = {
  
}


// function (command) {
//   return function() {
//     console.log(`Sending the command ${command}`);
//     socket.emit('command', command);
//   };
// }

const amount = 100;
const Commands = () => (
  <CommandGrid>
    <button className="rotate" onClick={console.log('works')}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={(`forward ${amount}`)}>
      <span className="symbol">↑</span> forward {amount}cm
    </button>
    <button className="rotate" onClick={console.log('works')}>
      <span className="symbol">⟳</span> 15°
    </button>
    <button onClick={(`left ${amount}`)}>
      <span className="symbol">←</span> left {amount}cm
    </button>
    <div className="center">
      <button className="takeoff" onClick={console.log('works')}>
        Take Off
      </button>
      <button className="land" onClick={console.log('works')}>
        Land
      </button>
      <button className="emergency" onClick={console.log('works')}>
        !! emergency !!
      </button>
    </div>
    <button onClick={console.log('works')}>
      <span className="symbol">→</span>
      right {amount}cm
    </button>
    <button className="height" onClick={console.log('works')}>
      <span className="symbol">⤒</span> {amount}cm
    </button>
    <button onClick={console.log('works')}>
      <span className="symbol">↓</span> back {amount}cm
    </button>
    <button className="height" onClick={console.log('works')}>
      <span className="symbol">⤓</span> {amount}cm
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={console.log('works')}>Flip Left</button>
    <button onClick={console.log('works')}>Flip Right</button>
    <button onClick={console.log('works')}>Flip Back</button>
    <button onClick={console.log('works')}>Flip Forward</button>
    <button onClick={console.log('works')}>Go 25 25 25 25</button>
    <button onClick={console.log('works')}>
      Curve!
    </button>
  </CommandGrid>
);

export default Commands;