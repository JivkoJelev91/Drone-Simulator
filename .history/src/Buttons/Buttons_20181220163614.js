import React, { Component } from 'react';


import {CommandState} from '../ContextApi/StateContext.js';


class Buttons extends Component{
  constructor(){
    super()
    this.amount = 100;
    this.counter = 0;
    this.state = {
      forward: 0,
      isActive: true,
    }
  }

  rotate(){
    return console.log('rotate!!');
  }

  flyForward = () => {
    this.setState({
      isActive: true
    })
    for (let index = 0; index <= 10; index++) {
        setTimeout(() => {
          this.setState({
            forward: index,
            isActive: false
          });
        if(this.state.forward === 10){
          this.setState({
            isActive: true
          })
        }
      }, index * 100);
    }
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

  flipflyForward(){
      return console.log('flipflyForward');
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
     <CommandState.Provider value={{
      commands: this.state
    }}>
    {this.props.children}
    <button onClick={this.flyForward} className={!this.state.isActive ? 'innactiveBtns' : null}>
      <span className="symbol">↑</span> flyForward {this.amount}cm
    </button>
    </CommandState.Provider>

    <button className="rotate" onClick={this.rotate}>
      <span className="symbol">⟳</span> 15°
    </button>
    <button onClick={this.left}>
      <span className="symbol">←</span> left {this.amount}cm
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
      right {this.amount}cm
    </button>
    <button className="height" onClick={this.hight}>
      <span className="symbol">⤒</span> {this.amount}cm
    </button>
    <button onClick={this.back}>
      <span className="symbol">↓</span> back {this.amount}cm
    </button>
    <button className="height" onClick={this.low}>
      <span className="symbol">⤓</span> {this.amount}cm
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={this.flipLeft}>Flip Left</button>
    <button onClick={this.flipRight}>Flip Right</button>
    <button onClick={this.flipBack}>Flip Back</button>
    <button onClick={this.flipflyForward}>Flip flyForward</button>
    <button onClick={console.log('TODO')}>Go 25 25 25 25</button>
    <button onClick={console.log('TODO')}>
      Curve!
    </button>
  </div>
    )
  }
}

export default Buttons;