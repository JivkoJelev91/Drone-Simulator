import React, {Component}  from 'react';

class Battery extends Component {
  constructor(){
    super();
    this.state = {
      batteryLevel: 100
    }
  }

  lowBattery = () => {
    
  }

  componentDidMount(){
    let seconds = new Date().getSeconds();
    console.log(seconds);
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