import React, { Component } from 'react';
import Battery from './Battery';
import Drone from './Drone'

class Buttons extends Component{
  constructor(props){
    super(props)
    this.amount = 100;
    this.counter = 0;
    this.state = {
      bottom: 20,
      left:45,
      direction: "",
      isActive: true,
    }
  }

  rotate(){
    return console.log('rotate!!');
  }

  flyForward = () => {
    this.setState({
      bottom: 60,
      isActive: false,
      direction: 'forward'
    })
    setTimeout( async () => {
      await this.setState({bottom: 20});
      await this.setState({isActive: true});
    }, 2000);
  }

  left = () => {
    this.setState({
      left: 10,
      isActive: false,
      direction: 'left'
    })
  }

  right(){
      return console.log('right');
  }

  back(){
      return console.log('back');
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
      <div id="wrapper">
        <div className="CommandGrid">
   
        <button className="rotate" onClick={this.rotate}>
          <span className="symbol">⟲</span> 90°
        </button>
        <button onClick={this.flyForward} className={!this.state.isActive ? 'innactiveBtns' : null}>
          <span className="symbol">↑</span> flyForward {this.amount}cm
        </button>

        <button className="rotate" onClick={this.rotate}>
          <span className="symbol">⟳</span> 15°
        </button>
        <button onClick={this.left} className={!this.state.isActive ? 'innactiveBtns' : null}>
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
        <div className="view">
              <Battery />
              <Drone state={this.state}/>
          </div>
    </div>
    )
  }
}

export default Buttons;