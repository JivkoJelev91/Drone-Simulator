import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 100
    }
  }

  lowBattery = () => {
    let seconds = new Date().getSeconds();
    console.log(seconds);
  }

  componentWillUpdate(prevProps) {
    let seconds = new Date().getSeconds();
    console.log(seconds);
    console.log(prevProps);
  }


  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel">{this.state.batteryLevel}%</span>
      </div>
    );
  }
}

export default Battery;