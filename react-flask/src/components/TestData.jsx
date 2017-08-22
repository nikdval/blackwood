import React from 'react';

var EV = React.createClass({
  getDefaultProps:function() {
    var colors=['#edc70a','#abc9bd']

    return {
       x: '0',
       y: '0',
       color: Math.random() < 0.5 ? colors[0] : colors[1]

    };
 },

  render:function(){
   return(
     <svg id='EV' width="960px" height="600px" >
          <g >
          <path id="EV" class="ev" fill={this.props.color} x={this.props.x} x='200' d="M69.39,55.91c0.02-0.79,0.01-1.31,0.01-1.31c-0.05-1.68-0.86-3.12-2.14-4.17
          		c-1.32-1.08-1.47-2.21-2.1-3.72c-1.2-2.9-3.62-5.52-6.95-5.54H40.64c-3.32,0.02-5.75,2.64-6.95,5.54c-0.63,1.51-0.78,2.64-2.1,3.72
          		c-1.29,1.05-2.09,2.49-2.14,4.17c0,0-0.16,8.3,2.21,8.95v3.77c0,0.83,0.68,1.51,1.51,1.51h3.93c0.83,0,1.51-0.68,1.51-1.51v-3.73
          		h21.64v3.73c0,0.83,0.68,1.51,1.51,1.51h3.93c0.83,0,1.51-0.68,1.51-1.51v-3.77c1.25-0.34,1.8-2.82,2.03-5.08L69.39,55.91z
          		 M35.98,48.98c0.11-0.29,0.22-0.59,0.34-0.9c0.43-1.04,2.09-4.45,5.32-4.47h15.56c3.23,0.02,4.89,3.43,5.32,4.47
          		c0.13,0.3,0.24,0.61,0.34,0.9c0.02,0.07,0.05,0.13,0.07,0.2H35.91C35.93,49.11,35.96,49.05,35.98,48.98z M39.92,59.04
          		c-0.07,0.08-0.16,0.13-0.26,0.16c-0.04,0.01-0.09,0.02-0.14,0.01l-5.56-0.01c-0.13,0-0.26-0.06-0.36-0.15
          		c-0.56-0.54-0.77-1.4-0.58-2.13c0.22-0.84,0.92-1.54,1.79-1.78c0.1-0.03,0.2-0.02,0.3,0.01l4.34,1.35c0.2,0.06,0.35,0.24,0.37,0.46
          		c0.03,0.37,0.08,0.63,0.12,0.91c0.04,0.23,0.08,0.46,0.11,0.76C40.07,58.78,40.02,58.93,39.92,59.04z M65.25,59.06
          		c-0.1,0.09-0.22,0.15-0.36,0.15l-5.56,0.01c-0.05,0-0.09,0-0.14-0.01c-0.1-0.02-0.19-0.08-0.26-0.16c-0.1-0.11-0.15-0.26-0.13-0.41
          		c0.03-0.3,0.07-0.53,0.11-0.76c0.04-0.28,0.09-0.54,0.12-0.91c0.02-0.21,0.17-0.39,0.37-0.46l4.34-1.35c0.1-0.03,0.2-0.03,0.3-0.01
          		c0.87,0.24,1.58,0.94,1.79,1.77C66.02,57.66,65.81,58.51,65.25,59.06z M54.79,23.83h-5.82l-2.33,8.39h2.33l-1.98,7.14h0.7
          		l6.75-8.38h-3.42L54.79,23.83z M54.79,23.83"/>
          </g>
          </svg>
    )
  }
});

var TestData = React.createClass({
  getInitialState: function() {
        return {
            consumption: "no data"
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
                generation: data.SolarYield,
                consumption: data.PowerConsumption,
                batteryStatus: data.BatteryStatus,
                grid: data.Grid,
                flow: data.BatteryFlow

            });
  },
  render: function () {
    return (
      <div className='container' >
      <p className="pull-right" >Generation: {this.state.generation}</p>
      <p className="pull-right" >Consumption: {this.state.consumption}</p>
      <p className="pull-right" >Battery Status: {this.state.batteryStatus}</p>
      <p className="pull-right" >Grid: {this.state.grid}</p>
      <p className="pull-right" >Battery Flow: {this.state.flow}</p>
      <EV />
      </div>
      );
  }
});

module.exports = TestData;
