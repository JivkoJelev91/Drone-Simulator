import React, {Component}  from 'react';


class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 0
    }
    this.countdown = null;
    this.counter = 0;
  }

  lowBattery = () => {
      this.setState({
        batteryLevel: parseInt((10000 - ++this.counter) / 100)
      });
  }

  componentDidMount() {
    this.countdown = setInterval(this.lowBattery, 1000);
  }

  componentWillUnmount() {
    if(this.batteryLevel === 0) clearInterval(this.countdown);
  }

  componentWillMount(){
    this.lowBattery();
  }

  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel" style={{ height:`${ this.state.batteryLevel }%`}}>{this.state.batteryLevel}%</span>
      </div>
    );
  }
}

export default Battery;