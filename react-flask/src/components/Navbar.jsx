import React from 'react';

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <NavMenu links={this.props.links} />
        </div>
      </nav>
    )}
});

var NavMenu = React.createClass({
  render: function(){
    var navLinks = navbar.links.map(function(link){
      return(
      <li><a href={'/'+ link.text}>
          {link.text}
        </a></li>
      );
    });
    return (
    <nav><ul className="nav navbar-nav">{navLinks}</ul></nav>
    );
  }
});


// set data
var navbar = {};

navbar.links = [
  {linkTo: "#", text: "Home"},
  {linkTo: "#", text: "About"},
  {linkTo: "#", text: "'Rough Guide'"},
  {linkTo: "#", text: "Admin"},
];

export default Navbar;
