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
        batteryLevel: 10000 - this.seconds
      })
      console.log(this.state.batteryLevel);
      console.log(seconds);
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
          <span className="batteryLevel">{}%</span>
      </div>
    );
  }
}

export default Battery;