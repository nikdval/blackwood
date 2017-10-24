import React from 'react';
import logo from '../img/logo/company-logo.png';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Photos from './Photos.jsx';

// create classes
var Header = React.createClass({
  render: function(){
    return(
      <div className="container">
        <NavBrand linkTo={this.props.brand} />
        <Photos />
        <About />

      </div>
    );
  }
});
var brand ={linkTo: "https://www.blackwoodgroup.org.uk/", text: "Grey Fleet to Green Fleet"};
var NavBrand = React.createClass({
  render: function(){
    return (
      <header>
        <a  href={brand.linkTo} target="_blank"><img id="logo-b" src={logo} alt="logo-b" /></a>
        <h3 className="text-white">{brand.text}</h3>
      </header>
    );
  }
});





export default Header;
