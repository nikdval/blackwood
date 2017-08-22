import React from 'react';
import Circle from './Circle.jsx'

var LampIcon = React.createClass({
  render:function(){
   return(
     <g id="lamp" >
     <Circle setClass= "grey" position= "translate(-190,5)"/>
			<circle id="bulb" className={this.props.charge} cx="480.94" cy="363.09" r="10"/>
			<path id="lamp_1_" className="grey" d="M483.87,351v-4.21c0-1.27-0.8-2.35-1.93-2.75v-14.95c0-0.55-0.45-1-1-1s-1,0.45-1,1v14.95
				c-1.13,0.41-1.93,1.49-1.93,2.75V351c-7.53,1.33-13.34,7.71-13.8,15.5h33.47C497.21,358.71,491.4,352.33,483.87,351L483.87,351z
				 M483.87,351"/>
     </g>

   )}
})
export default LampIcon;
