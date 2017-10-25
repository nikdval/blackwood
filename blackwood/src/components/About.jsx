import React from 'react';

var About = React.createClass({
  render:function(){
   return(
     <div id="about">
      <button type="button" className="btn btn-about pull-right" data-toggle="modal" data-target="#myModal">About the Project</button>
      <div className="modal fade" id="myModal" role="dialog">
         <div className="modal-dialog">
          {/* Modal content-->*/}
          <div className="modal-content"> 
          <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">About the Project</h4>
      </div>
      <div className="modal-body" id="aboutText1">
      <p>In early 2017 Broom Court Care Home in Stirling was fitted out with an innovative renewable energy system. The project was designed by Blackwood and local energy consultancy Scene with Emtec chosen as the principal contractor, and funding was provided by Blackwood and the Scottish Government’s Low Carbon Infrastructure Transition Programme. The project comprises 111 kW of solar pv and 128 kWh of electrical storage, as well an electric car and charging infrastructure – with potential for further cars to be added in the future.</p>
      <p>The premise of the project was that current transport arrangements are burdensome to the care home sector, both in terms of logistics and costs. Logistically, care home staff that work in the community either have to bring their own vehicles to work, which limits recruitment options for care home operators and costs a great deal in terms of payments for mileage, or they have to take public transport to their appointments – which costs a great deal of time. We wanted to prove the benefits of utilising electric vehicles; meaning that staff didn’t have to bring their cars to work as much, whilst costs to the care home would also reduce. The next step was to think about creating our own electricity for the car, to make our whole system self-sufficient.</p>
      <p>Our roof-top solar pv systems powers the care home during the day with any excess generation stored in our battery array. Energy flows to the electric vehicle from either the solar or the batteries. The batteries also act as an Uninterruptible Power Supply for the care home which allowed the manually connected old & noisy diesel generator to be removed. The system is also connected to the national electricity grid, although we are trying to minimise ‘grid export’ as far as possible.</p>
      <p>We expect that 50% of the care home’s electricity demand will be met through the new renewable energy system, whilst the electric car will be fully charged by the solar pv on most days. Live data from the system is shown in the dynamic schematic on this website.</p>
      </div>
      <div className="modal-header">
    <h4 className="modal-title">Could we Follow Suit?</h4>
  </div>
    <div className="modal-body" id="aboutText2">
      <p>The Broom Court project brings together relatively mature technologies into a system configuration. Solar PV and electric cars are now established technologies that can be highly cost effective in environments that require fairly heavy and consistent use of electricity and vehicles, such as care homes. The most novel technology in our system, battery storage, is rapidly reducing in price and is the key to providing a genuine local energy system, as excesses and shortfalls in energy generation can be smoothed out.</p>
      <p>Due to high costs of battery storage at present some grant funding was required to make this project financially viable. However, the costs reductions of battery technology are expected to be tremendous over the next few years, as they have been for solar pv over the past 10 years. Very soon projects like ours will be financially viable in a range of settings such as ours. </p>
      <p>Please do get in touch to find out more about our project journey and how you can follow a similar path.</p>
       {/*<img className="aboutImg"> </img>
       <img className="aboutImg"> </img>
       <img className="aboutImg"> </img>*/}
       <button type="button" className="" data-dismiss="modal">Close</button>
       </div>
      </div>

          </div>
         </div>
      </div>

   )}

})
export default About;
