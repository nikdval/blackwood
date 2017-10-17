import React from 'react';



var TextUpdate = React.createClass({

  render:function(){
  var textKettles = 'power ' + this.props.kettles;
  console.log(textKettles);
   return(
     <g id="text" >

     <g id="Generation" transform="matrix(1 0 0 1 173 70)">
      <text id="XMLID_38_"  className="grey">Solar PV</text>
      <text id="generationNum" y="50" className="textControl" fill={this.props.generationColor}>{this.props.generation}</text>
     <text id="XMLID_40_" y="70">That’s enough to </text>
     <text id="XMLID_40_" y="85">{ textKettles }</text>
     </g>
     <g id="PowerConsumption" transform="matrix(1 0 0 1 460 180)">
       <rect id="XMLID_70_" x="-10" y="-20" className = "white" width="220" height="80"/>
       <text id="XMLID_74_"  className="grey">Usage</text>
       <text id="XMLID_73_" y="45" className = "yellow textControl" fill={this.props.consumptionColor}>{this.props.consumption}</text>
     </g>
     <g id="chargeText" transform="matrix(1 0 0 1 720 360)">
      {/* <text id="XMLID_105_"  className="grey">Status</text>*/}
       <text id="XMLID_95_" transform="matrix(1 0 0 1 0 0)"className="textControl" fill={this.props.batteryColor}>{this.props.batteryTitle}</text>
     </g>
     <g id="exportText" transform="matrix(1 0 0 1 525 70)">
       <text id="XMLID_80_"  className="grey">{this.props.gridTitle}</text>
       <text id="XMLID_79_" y="50" className="textControl" fill={this.props.gridColor}>{this.props.grid}</text>
     </g>
     <text id="XMLID_282_" transform="matrix(1 0 0 1 871.6614 205.343)" className="greysmall">Grid</text>
     <text id="XMLID_283_" transform="matrix(1 0 0 1 430 530)" className="greysmall">EV charger</text>
     <text id="XMLID_284_" transform="matrix(1 0 0 1 635 417.5486)" className="greysmall">Batteries</text>

     </g>

   )}
})
export default TextUpdate;
