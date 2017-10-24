import React from 'react';
import Img1 from  '../img/drone/1.jpg';
import Img2 from  '../img/drone/2.jpg';
import Img3 from  '../img/drone/3.jpg';
import Img4 from  '../img/drone/4.jpg';
import Img5 from  '../img/drone/5.jpg';
import Img6 from  '../img/drone/6.jpg';


var About = React.createClass({
  render:function(){
   return(
     <div id="photos">
      <button type="button" className="btn btn-about pull-right" data-toggle="modal" data-target="#sitePhotos">Site Photos</button>
      <div className="modal fade" id="sitePhotos" role="dialog">
         <div className="modal-dialog">
          {/* Modal content-->*/}
          <div className="modal-content">
           {/*<div className="modal-header" id="headerphotos">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
       <h4 className="modal-title">Drone Images</h4>
      </div>*/}
     <div className="modal-body" id="droneImg">
        <div id="exitBtn">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={Img1} alt="" />
              </div>

            <div className="item">
              <img src={Img2} alt="" />
            </div>

            <div className="item">
              <img src={Img3} alt="" />
            </div>
            <div className="item">
              <img src={Img4} alt="" />
            </div>
            <div className="item">
              <img src={Img5} alt="" />
            </div>
            <div className="item">
              <img src={Img6} alt="" />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      {/*<button type="button" classNameName="" data-dismiss="modal">Close</button>*/}
      </div>


      </div>

          </div>
         </div>
      </div>

   )}

})
export default About;
