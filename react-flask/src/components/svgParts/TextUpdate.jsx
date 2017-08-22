import React from 'react';


var TextUpdate = React.createClass({
  render:function(){
   return(
     <g id="text" >

     <g>
      <text id="XMLID_38_" transform="matrix(1 0 0 1 199.4456 55.9266)" className="grey">Solar PV</text>
      <text id="generationNum" transform="matrix(1 0 0 1 173.8071 104.9266)" className="textControl" fill={this.props.generationColor}>{this.props.generation}</text>
     <text id="XMLID_40_" transform="matrix(1 0 0 1 165.8169 123.9266)"><tspan x="0" y="0" className="st14 st15 st16">That’s enough to power</tspan><tspan x="37.36" y="16.8" class="st14 st15 st16">200 kettles!</tspan></text>
     </g>
     <g id="PowerConsumption">
       <rect id="XMLID_70_" x="455" y="173.59" className = "white" width="111" height="95"/>
       <text id="XMLID_74_" transform="matrix(1 0 0 1 481.8515 197.593)" className="grey">Usage</text>
       <text id="XMLID_73_" className = "yellow" transform="matrix(1 0 0 1 460.6271 246.593)" className="textControl" fill={this.props.consumptionColor}>{this.props.consumption}</text>
     </g>
     <g id="chargeText">
       <rect id="XMLID_107_" x="683.06" y="173.59" className="white" width="111" height="95"/>
       <text id="XMLID_105_" transform="matrix(1 0 0 1 697.5247 197.593)" className="grey">{this.props.batteryTitle}</text>
       <text id="XMLID_95_" transform="matrix(1 0 0 1 688.6899 246.593)"className="textControl" fill={this.props.batteryColor}>{this.props.batteryflow}</text>
     </g>
     <g id="exportText">
       <text id="XMLID_80_" transform="matrix(1 0 0 1 525.6773 79.0931)" className="grey">{this.props.gridTitle}</text>
       <text id="XMLID_79_" transform="matrix(1 0 0 1 505.3587 128.0931)" className="textControl" fill={this.props.gridColor}>{this.props.grid}</text>
     </g>
     <text id="XMLID_282_" transform="matrix(1 0 0 1 871.6614 205.343)" className="greysmall">Grid</text>
     <text id="XMLID_283_" transform="matrix(1 0 0 1 375.703 526.593)" className="greysmall">EV charger</text>
     <text id="XMLID_284_" transform="matrix(1 0 0 1 634.0457 417.5486)" className="greysmall">Batteries</text>
     </g>

   )}
})
export default TextUpdate;
