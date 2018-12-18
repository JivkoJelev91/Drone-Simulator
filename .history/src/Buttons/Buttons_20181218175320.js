import React, { Component } from 'react';


class Buttons extends Component{
  constructor(){
    super()
    this.amount = 100;
  }
  rotate(){
    return console.log('rotate!!');
  }
  forward(){
    return console.log('forward');
  }
  back(){
      return console.log('back');
  }
  left(){
      return console.log('left');
  }
  right(){
      return console.log('right');
  }
  takeOff(){
      return console.log('takeOff');
  }
  flipLeft(){
      return console.log('flipLeft');
  }
  flipRight(){
      return console.log('flipRight');
  }
  flipForward(){
      return console.log('flipForward');
  }
  flipBack(){
      return console.log('flipBack');
  }
  hight(){
      return console.log('hight');
  }
  low(){
      return console.log('low');
  }
  land(){
      return console.log('land');
  }
  emergency(){
      return console.log('emergency');
  }

  render(){
    return (
      <div className="CommandGrid">
    <button className="rotate" onClick={this.rotate}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={this.forward}>
      <span className="symbol">↑</span> forward {amount}cm
    </button>
    <button className="rotate" onClick={this.rotate}>
      <span className="symbol">⟳</span> 15°
    </button>
    <button onClick={this.left}>
      <span className="symbol">←</span> left {amount}cm
    </button>
    <div className="center">
      <button className="takeoff" onClick={this.takeOff}>
        Take Off
      </button>
      <button className="land" onClick={this.land}>
        Land
      </button>
      <button className="emergency" onClick={this.emergency}>
        !! emergency !!
      </button>
    </div>
    <button onClick={this.right}>
      <span className="symbol">→</span>
      right {amount}cm
    </button>
    <button className="height" onClick={this.hight}>
      <span className="symbol">⤒</span> {amount}cm
    </button>
    <button onClick={this.back}>
      <span className="symbol">↓</span> back {amount}cm
    </button>
    <button className="height" onClick={this.low}>
      <span className="symbol">⤓</span> {amount}cm
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={this.flipLeft}>Flip Left</button>
    <button onClick={this.flipRight}>Flip Right</button>
    <button onClick={this.flipBack}>Flip Back</button>
    <button onClick={this.flipForward}>Flip Forward</button>
    <button onClick={console.log('TODO')}>Go 25 25 25 25</button>
    <button onClick={console.log('TODO')}>
      Curve!
    </button>
  </div>
    )
  }
}

export default Buttons;