import React, { Component } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "../CSS/About.css"


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className=""  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
                        <span className="location">
                           <LocationOnOutlinedIcon />{resumeData.address}
                        </span>
                        <span>{resumeData.website}</span>
       					</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}