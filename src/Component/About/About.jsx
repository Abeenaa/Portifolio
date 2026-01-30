import React from "react";
import "./About.css";
import profile from "../../assets/abenipro.jpg";

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">
        About <span>me</span>
      </h2>

      <div className="about-content">
        <div className="about-left">
          <img src={profile} alt="Abenezer Endalew" className="about-photo" />
        </div>

        <div className="about-right">
          <p className="about-desc">
            I'm a passionate <strong>Full Stack Developer & ML Enthusiast</strong> who loves
            building modern, high-performance web applications and intelligent systems from the ground
            up. I turn ideas into smooth, beautiful digital experiences that
            users genuinely enjoy — using React for pixel-perfect frontends,
            Node.js + MySQL for fast, scalable backends, and Python + Machine Learning
            for data-driven insights and predictive solutions.
            <br />
            <br />
            Let's create something awesome together — whether it's a stunning web application
            or an AI-powered solution that makes a real difference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;