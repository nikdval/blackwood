import React from 'react';
import logoScene from  '../img/logo/scene.png';
import logoSolarEdge from  '../img/logo/solaredge.svg';
import logoVictorn from  '../img/logo/victorn-energy-logo.png';


var Footer = React.createClass({
  render: function () {
    return (
      <div className='container' >
      <footer>
      <div className="col-md-6 col-sm-6" id="scene">
        <p className=" text-white">Developed by: </p>
        <a href="http://scene.community/" target="_blank" ><img className="" src={logoScene} id="logo-Scene" alt="" /></a>
      </div>
      <div className="col-md-6 col-sm-6" id="dataLogo">
        <p className=" text-white">Live data powered by: </p>
        <a href="https://www.victronenergy.com/" target="_blank" ><img className="logoSup" src={logoVictorn} id="logo-Victron" alt=""  /></a>
          <a href="https://www.solaredge.com/" target="_blank" ><img className="logoSup" src={logoSolarEdge} id="SolarEdge" alt="" /></a>
      </div>
  </footer>
      </div>
      );
  }
});

module.exports = Footer;
