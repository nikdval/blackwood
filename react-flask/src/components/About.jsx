import React from 'react';

var About = React.createClass({
  render:function(){
   return(
     <div id="about">
      <button type="button" className="btn btn-about pull-right" data-toggle="modal" data-target="#myModal">To Learn More</button>
      <div className="modal fade" id="myModal" role="dialog">
         <div className="modal-dialog">
          {/* Modal content-->*/}
          <div className="modal-content">
          <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">About Blackwood energy system</h4>
      </div>
      <div className="modal-body" id="aboutText">
      <p>As a part of Local Energy Challenge Fund (LECF), Blackwood Home & Cares alongside with Scene Connect, have designed and implement an innovative energy system in Broom Court, Stirling. The system utilises rooftop solar PV, 111,3kWp capacity, to supply the buildings, electrical vehicles, and dynamically managed battery storage and supply, controlled via energy optimisation system. </p>
      <p>Blackwood project intents to be used as pilot for this new type of energy systems, offering a greener and cheaper energy and transport. The pioneering technology offering an example of how to reduce operating costs, improve performance of vehicle fleets, and reduce CO2 emissions.</p>
      <p>The smart control system is designed to optimize the use of the generated energy to the buildings and the EV chargers and store the surplus, in a way that grid energy import is minimised. For this purposes, Cloud Solar smart system have been integrated into the system to monitor the energy flow balance. </p>
      <p>Real data from Broom Court facilities are broadcasted here, in an effort to increase the public awareness of the best use of Renewable Energy in an affordable and ecological way. </p>
       <img className="aboutImg"> </img>
       <img className="aboutImg"> </img>
       <img className="aboutImg"> </img>

      </div>

          </div>
         </div>
      </div>

      {/*}<div id="aboutContent" className="collapse">
        <div id="aboutText" className="col-md-6">
          <h3 >About Blackwood energy system</h3>
          <p>As a part of Local Energy Challenge Fund (LECF), Blackwood Home & Cares alongside with Scene Connect, have designed and implement an innovative energy system in Broom Court, Stirling. The system utilises rooftop solar PV, 111,3kWp capacity, to supply the buildings, electrical vehicles, and dynamically managed battery storage and supply, controlled via energy optimisation system. </p>
          <p>Blackwood project intents to be used as pilot for this new type of energy systems, offering a greener and cheaper energy and transport. The pioneering technology offering an example of how to reduce operating costs, improve performance of vehicle fleets, and reduce CO2 emissions.</p>
          <p>The smart control system is designed to optimize the use of the generated energy to the buildings and the EV chargers and store the surplus, in a way that grid energy import is minimised. For this purposes, Cloud Solar smart system have been integrated into the system to monitor the energy flow balance. </p>
          <p>Real data from Broom Court facilities are broadcasted here, in an effort to increase the public awareness of the best use of Renewable Energy in an affordable and ecological way. </p>
       </div>
       <div className="col-md-6">
        <img className="aboutImg"> </img>
       </div>
     </div>*/}
     </div>
   )}

})
export default About;
