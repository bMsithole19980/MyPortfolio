import React from "react";
import "./Education.css";
import Thutos from "../../assets/Home/thutos.jpg";

export default function Education() {
  return (
    <div className="education" id="education">
      <div className="education-page">
        <h1 className="Heading">Education</h1>
        <div className="Educ">
          <div className="education-entry">
            <img src={Thutos} alt="TUT" className="school-logo" />
            <h2 className="School">Tshwane University of Technology</h2>
            <p className="qulification">Diploma: IT Software Development</p>
            <p className="end-date">Graduation Date: April 2024</p>
            <p className="projects">Project: Micasucasa </p>
            <p className="project-descr">hdcvjhsdvacjsavcajhcbkdbc</p>
            <p>Honors and Awards:</p>
          </div>
          <div className="education-entry">
            <img src={Thutos} alt="Thutos" className="school-logo" />
            <h2 className="School">Thuto-thebe Secondary School</h2>
            <p className="qulification">Grade/Matric: Maths and Science</p>
            <p className="end-date">School leaving Date: December 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
}
