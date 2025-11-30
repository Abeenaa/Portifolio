import React from "react";
import "./About.css";
import profile from "../../assets/abenipro.jpg";

function About() {
  return (
    <div className="about-container" id="about">
      {/* Title with gradient blob */}
      <h2 className="about-title">
        About <span>me</span>
        <div className="blob"></div>
      </h2>

      <div className="about-content">
        {/* Left - Photo */}
        <div className="about-left">
          <img src={profile} alt="Abenezer Endalew" className="about-photo" />
        </div>

        {/* Right - Text & Skills */}
        <div className="about-right">
          <p className="about-desc">
            I'm a passionate <strong>Full Stack Developer</strong> who loves
            building modern, high-performance web applications from the ground
            up. I turn ideas into smooth, beautiful digital experiences that
            users genuinely enjoy — using React for pixel-perfect frontends and
            Node.js + MySQL for fast, scalable backends. A problem-solver at
            heart, I’m always learning, always improving, and obsessed with
            writing clean, future-proof code that doesn’t just work — it feels
            effortless.
            <br />
            <br />
            Let’s create something awesome together.
          </p>
          {/* Skills */}
          <div className="skills">
            <div className="skill-item">
              <span>HTML & CSS</span>
              <div className="skill-bar">
                <div className="bar-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>React JS </span>
              <div className="skill-bar">
                <div className="bar-fill" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="bar-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Node.js /Php/MongoDB & MySQL</span>
              <div className="skill-bar">
                <div className="bar-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
