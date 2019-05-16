import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        {/* Work */}
        <div className="twelve columns header-col" id="Work">
          <h1><span>Work</span></h1>
        </div>
        <br></br>

        <div className="row education">
          <div className="three columns header-col">
            <img src={require("../images/GS.png")} alt="" className="img-responsive GS-img" />
            <img src={require("../images/HPE.png")} alt="" className="img-responsive HPE-img" />
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>
        {/* Education */}
        <div className="twelve columns header-col" id="Eduction">
          <h1><span>Education</span></h1>
        </div>
        <br></br>

        <div className="row education">
          <div className="three columns header-col">
            <img src={require("../images/DU.jpg")} alt="" className="img-responsive DU-img" />
            <img src={require("../images/CSU.jpg")} alt="" className="img-responsive CSU-img" />
          </div>

          <div className="nine columns main-col">
          {
            resumeData.education && resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span> <em className="date">Graduated: {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                    <p>
                      {item.Achievements}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </section>
    );
  }
}