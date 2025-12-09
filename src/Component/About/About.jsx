import React from "react";
import "./About.css";
import profile from "../../assets/abenipro.jpg";

function About() {
  return (
    <div className="about-container" id="about">
      {/* Title */}
      <h2 className="about-title">
        About <span>me</span>
      </h2>

      <div className="about-content">
        {/* Left - Photo */}
        <div className="about-left">
          <img src={profile} alt="Abenezer Endalew" className="about-photo" />
        </div>

        {/* Right - Only Text Now */}
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
        </div>
      </div>
    </div>
  );
}

export default About;
