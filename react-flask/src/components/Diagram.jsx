import React from 'react';
import Circle from './svgParts/Circle.jsx'
import BatteryIcon from './svgParts/BatteryIcon.jsx'
import EVIcon from './svgParts/EVIcon.jsx'
import LampIcon from './svgParts/LampIcon.jsx'
import GridIcon from './svgParts/GridIcon.jsx'
import Sun from './svgParts/Sun.jsx'
import TextUpdate from './svgParts/TextUpdate.jsx'
import Paths from './svgParts/Paths.jsx'

import Svgimage from '../img/svg/backgound-image.jpg';

var background = {backgroundImage: "url(" + Svgimage + ")"}
//import EVfile from '../img/svg/EV.svg';
//import Background from '../img/svg/backgound-image.jpg'
function charger(data){
  var state;
    if (data<= 0){
      state=''
    }else{
      state='charger'
    }
    return state;
    console.log(state);
}

function textConstructor(data){
  return data.toFixed(0) + " kW";
}

var mainColors = {yellow:'#DAD34A',green:'#8BC53F',greenblue:'#02968C',blue:"#2E3191", red:'#ee0000' };

var Animation = React.createClass({
  getInitialState: function() {
        return {
            consumption: "- kW",
            batteryState: "20",
            generationColor: mainColors.blue,
            consumptionColor: mainColors.yellow,
            gridColor:mainColors.greenblue,
            batteryColor: mainColors.green,

        };
    },
  componentDidMount: function() {
      var connection = new WebSocket("ws://127.0.0.1:13254/");
      var that = this;
      connection.onmessage = function (e) {
          var jsonData = JSON.parse(e.data);
          that.handlePushMessage(jsonData);
          console.log(jsonData.PowerConsumption);
      };
  },
  handlePushMessage: function(data) {
    this.setState({
                generation: textConstructor(data.SolarYield),
                consumption: textConstructor(data.PowerConsumption),
                batteryflow: textConstructor(data.BatteryFlow),
                grid: textConstructor(data.Grid),

                gridTitle: data.Grid<0? "Importing": "Exporting",
                batteryTitle: data.BatteryFlow<0? "Discharging": "Charging",

                gridColor: data.Grid <0 ? mainColors.red : mainColors.greenblue,
                batteryColor: data.BatteryFlow <0 ? mainColors.red  : mainColors.green,

                batteryStatus: data.BatteryStatus*0.42,
                batteryState:charger(data.BatteryFlow),
                generationState: charger(data.SolarYield),
                consumptionState: charger(data.PowerConsumption),
                gridState: charger(data.Grid),
                sunState: data.SolarYield<=0 ? " " : "sunpulse"
            });
  },

  render:function(){
   return(
     <svg id='animation' width="960px" height="600px" viewBox="0 0 960 610" preserveAspectRatio="none" style={background}>

     <defs>
        <linearGradient id="yellowGradient">
          <stop offset="5%" stopColor="#F60" />
          <stop offset="95%" stopColor="#FF6" />

        </linearGradient>
        <radialGradient id="sunlight" cx="50%" cy="50%" r="60%" >
      		<stop  offset="0" stopColor="#EE4036" />
          <stop offset="1" stopColor="#FDF286"/>
      	</radialGradient>
      </defs>
	    <Sun sunPulse={this.state.sunState}/>
        <TextUpdate
          generation={this.state.generation}
          consumption={this.state.consumption}
          batteryflow ={this.state.batteryflow}
          grid = {this.state.grid}

          gridTitle={this.state.gridTitle}
          batteryTitle={this.state.batteryTitle}

          generationColor={this.state.generationColor}
          consumptionColor={this.state.consumptionColor}
          batteryColor={this.state.batteryColor}
          gridColor={this.state.gridColor}
        />
        <Paths
          generationColor={this.state.generationColor}
          consumptionColor={this.state.consumptionColor}
          batteryColor={this.state.batteryColor}
          gridColor={this.state.gridColor}

          generationState={this.state.generationState}
          consumptionState={this.state.consumptionState}
          batteryState={this.state.batteryState}
          gridState={this.state.gridState}
          />


        <g id ="icons">
          <EVIcon charge={this.state.consumptionState}/>
          <LampIcon charge={this.state.consumptionState}/>
          <BatteryIcon charge= {this.state.batteryStatus} colorChange={this.state.batteryColor}/>
          <GridIcon charge= {this.state.gridState} colorChange={this.state.gridColor}/>
        </g>

     </svg>
    )
  }
});

class Diagram extends React.Component {
  render() {
  return (
    <div className="container">
      <div id="svgContainer" >
          <Animation />
      </div>
    </div>

  );
}
}

export default Diagram;
