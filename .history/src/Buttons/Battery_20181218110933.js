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
  }

  componentDidMount() {
    this.countdown = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
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