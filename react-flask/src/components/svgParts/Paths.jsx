import React from 'react';


var Paths = React.createClass({
  render:function(){
   return(
     <g id="paths" strokeWidth="3" strokeMiterlimit="10"  fill="none">
      <line id="generationSt" className={this.props.generationState} stroke= {this.props.generationColor} x1="305" y1="268.59" x2="305" y2="152.09" />
       <polyline id="pathConsumption" className={this.props.consumptionState} stroke= {this.props.consumptionColor} points="317.5,159.33 432,159.33 432,474 445.75,474 	"/>
       <line id="pathGrid" className={this.props.gridState} stroke= {this.props.gridColor} x1="317.5" y1="145.33" x2="854.66" y2="145.33"/>
       <polyline id="pathBattery" className={this.props.batteryState} stroke= {this.props.batteryColor} points="317.5,152.09 671.23,152.09 671.23,317 	"/>
       <rect id="eCenter" x="292.5" y="139.59" className="grey" width="25" height="25"/>
       <line id="pathConsumption_2" className={this.props.consumptionState} stroke= {this.props.consumptionColor} x1="432" y1="356.93" x2="447" y2="356.93"/>
     </g>

   )}
})
export default Paths;
