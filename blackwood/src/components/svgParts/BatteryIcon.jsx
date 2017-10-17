import React from 'react';
import Circle from './Circle.jsx'

var BatteryIcon = React.createClass({
  render:function(){
   return(
     <g id="batteryIcon"  >
     <Circle setClass= "grey" position= "translate(0,0)"/>
     <path id="XMLID_16_" className="grey" d="M680.81,328.08h-5.63v-1.12c0-0.68-0.45-1.13-1.12-1.13h-9c-0.67,0-1.12,0.45-1.12,1.13v1.12
   h-5.63c-1.24,0-2.25,1.01-2.25,2.25v38.25c0,1.24,1.01,2.25,2.25,2.25h22.5c1.24,0,2.25-1.01,2.25-2.25v-38.25
   C683.06,329.1,682.05,328.08,680.81,328.08z M666.52,362.96l2.48-12.38h-6.19l9.79-14.62l-2.47,12.37h6.19L666.52,362.96z"/>
   <rect id="batteryFill" x="-370" y="656.56"  transform="rotate(-90)" rx="2" ry="2" fill={this.props.colorChange} width={this.props.charge} height="26"/> 
     <polygon id="lightening" className="white" points="672.6,335.96 662.81,350.58 669,350.58 666.52,362.96 676.31,348.33 670.13,348.33 "/>
     </g>

   )}
})
export default BatteryIcon;
