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
    return <span className="batteryLevel">{seconds}%</span>
  }

  render() {
    return (
      <div className="batteryStyles">
        {this.lowBattery()}
      </div>
    );
  }
}

export default Battery;