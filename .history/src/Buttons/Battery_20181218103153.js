import React  from 'react';


class Battery extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="batteryStyles">
          <span className="batteryLevel">60%</span>
      </div>
    );
  }
}

export default Battery;