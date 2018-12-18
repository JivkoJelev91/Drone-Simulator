import styled from 'styled-components';
import React  from 'react';
import Commands from './Commands.js'



const amount = 100;
let counter = 0;
const Buttons = () => (
  <div className="CommandGrid">
    <button className="rotate" onClick={Commands.rotate}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={Commands.forward}>
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
  </div>
);

export default Buttons;