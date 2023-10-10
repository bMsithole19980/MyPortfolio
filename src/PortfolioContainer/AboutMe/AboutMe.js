import React from "react";
import "./AboutMe.css";
import aboutImage from "../../assets/Home/soshPlata.png";
export default function AboutMe() {
  return (
    <div className="about" id="about">
      <h1 className="Head"> About Me </h1>
      <span>Why choose Me</span>
      <div className="About-container">
        <div className="about-image">
          <img src={aboutImage} alt="Me" />
        </div>

        <div className="about-details">
          <p>
            A Full Stack Developer proficient in the MERN stack is adept at both
            front-end and back-end web development. They excel in utilizing
            MongoDB, Express.js, React.js, and Node.js to create dynamic and
            responsive web applications. Their responsibilities encompass
            designing user interfaces, implementing server-side functionality,
            and managing databases, enabling them to deliver complete,
            end-to-end solutions for web development projects.
          </p>
        </div>
        <div className="Highlights">
          <span className="orange-bullet">&#8226;</span>
          <span className="bullet-text">
            Full Stack Web and Mobile developer
          </span>
          <br></br>
          <span className="orange-bullet">&#8226;</span>
          <span className="bullet-text">
            Responsive and Interactive Front ed as per design
          </span>
          <br></br>
          <span className="orange-bullet">&#8226;</span>
          <span className="bullet-text">React and React Native</span>
          <br></br>
          <span className="orange-bullet">&#8226;</span>
          <span className="bullet-text">Redux for State Management</span>
          <br></br>
          <span className="orange-bullet">&#8226;</span>
          <span className="bullet-text">Building Rest API</span>
          <br></br>
        </div>
        <div className=" buttonContainer" style={{ marginTop: "10px" }}>
          <button className="btn primary-btn">Hire Me</button>
          <button className="btn highlighted-btn">Get Resume</button>
        </div>
      </div>
    </div>
  );
}
