import React from 'react';


var Sun = React.createClass({

  render:function(){
   return(
     <g id="sun"  >


  <circle className={this.props.sunPulse} fill="#FDF286" cx="70" cy="63.59" r="40"></circle>
	<circle className="circle" id="sunCircle" fill='url(#sunlight)'  cx="70" cy="63.59" r="40"/>
     </g>

   )}
})
export default Sun;
