import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 10000
    }
    this.countdown = null;
  }

  lowBattery = () => {
      // if(result == 0) clearInterval(interval);
      let seconds = new Date().getSeconds();
      this.setState({
        batteryLevel: 10000 - seconds
      })
      return this.state.batteryLevel
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