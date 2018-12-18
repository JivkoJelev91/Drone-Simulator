import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 10000
    }
    this.countdown = null;
    this.counter = 0;
  }

  lowBattery = () => {
      this.setState({
        batteryLevel: 10000 - this.counter++
      })
      return (this.state.batteryLevel / 100).toFixed(0);
  }

  componentDidMount() {
    this.countdown = setInterval(this.lowBattery, 1000);
  }

  componentWillUnmount() {
    if(this.batteryLevel === 0) clearInterval(this.countdown);
  }

  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel">{this.lowBattery}%</span>
      </div>
    );
  }
}

export default Battery;