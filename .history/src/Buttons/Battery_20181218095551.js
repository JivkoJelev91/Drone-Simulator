import styled from 'styled-components';
import React  from 'react';

const BatteryStyles = styled.div`
  width: 100%;
  --color: '#bb0707';
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  /* box-shadow: 0 0 10px var(--color); */
  background: #c5c5c5;
  .batteryLevel {
    transition: all 0.5s;
    height: 100%;
    text-align: center;
    color: white;
    display: block;
    background: var(--color);
  }
`;

const Battery = () => (
  <BatteryStyles>
    <span className="batteryLevel">60%</span>
  </BatteryStyles>
);

export default Battery;