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
      let result = this.state.batteryLevel - seconds;
      // if(result == 0) clearInterval(interval);
      this.setState({
        batteryLevel: 10000 - seconds
      })
      console.log(this.state.batteryLevel);
    }, 1000)
  }

  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel">{this.lowBattery()}%</span>
      </div>
    );
  }
}

export default Battery;