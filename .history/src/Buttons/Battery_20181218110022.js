import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 10000
    }
  }

  lowBattery = () => {
    let interval = setInterval(() => {
      let seconds = new Date().getSeconds();
      if(this.state.batteryLevel == 0) clearInterval(interval)
      this.setState({
        batteryLevel: this.state.batteryLevel - seconds
      });
      console.log(this.batteryLevel);    
    }, 1000)
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