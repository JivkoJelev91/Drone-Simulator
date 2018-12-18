import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 100
    }
  }

  lowBattery = () => {
    let interval = setInterval(() => {
      let seconds = new Date().getSeconds();
      console.log(seconds);
      if(seconds == 0) clearInterval(interval)
    })
    return <span className="batteryLevel">{this.state.batteryLevel}%</span>
  }

  render() {
    return (
      <div className="batteryStyles">
        {this.lowBattery}
      </div>
    );
  }
}

export default Battery;