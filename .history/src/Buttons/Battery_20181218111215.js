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
      let seconds = new Date().getSeconds();
      this.setState({
        batteryLevel: 10000 - seconds
      })
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
          <span className="batteryLevel">{(this.state.batteryLevel / 100).toFixed(0)}%</span>
      </div>
    );
  }
}

export default Battery;