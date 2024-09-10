import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} – {item.YearOfLeaving} • {item.duration}
                        </em>
                      </p>
                      <i>
                        {item.Tasks1} <br/>
                        {item.Tasks2} <br/>
                        {item.Tasks3} <br/>
                        {item.Tasks4} <br/>
                        {item.Tasks5} <br/>
                        {item.Tasks6} <br/>
                        {item.Tasks7} <br/>
                        {item.Tasks8} <br/>
                        <hr />
                      </i>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "} 
                        <em className="date">
                          {item.MonthOfPassing} – {item.YearOfPassing} • {item.duration}
                        </em>
                      </p>
                      <span>{item.Achievements}</span> 
                    </div>
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
