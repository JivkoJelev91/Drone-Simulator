import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 10000
    }
    this.seconds = new Date().getSeconds();
  }

  lowBattery = () => {
      // if(result == 0) clearInterval(interval);
      this.setState({
        batteryLevel: 10000 - this.seconds
      })
      console.log(this.state.batteryLevel);
  }

  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel">{setInterval(this.lowBattery}%</span>
      </div>
    );
  }
}

export default Battery;