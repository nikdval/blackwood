import React from 'react';
import logoCloud from  '../img/logo/cloudSolar_white.png';


var Footer = React.createClass({
  render: function () {
    return (
      <div className='container' >
      <footer>
      <p className="pull-right text-white">Powered by <a href="https://www.cloud-solar.com/" target="_blank" ><img src={logoCloud} id="logo-b" alt="" height="50px" /></a></p>
  </footer>
      </div>
      );
  }
});

module.exports = Footer;
