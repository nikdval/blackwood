import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.jsx';
import Diagram from './components/Diagram.jsx';

import TestData from './components/TestData.jsx'

var App = React.createClass({
  render: function() {
    return(
      <div className= "app">
        <Header />
        <Diagram  />

        <Footer />
      </div>
    )
  }
});

module.exports= App;
