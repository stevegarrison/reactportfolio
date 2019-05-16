import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="four columns">

               <img className="profile-pic"  src="images/profpic.jpeg" alt="" style={{borderRadius: "100%"}}/>

            </div>

            <div className="eight columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

              
            </div>
         </div>
      </section>
    );
  }
}