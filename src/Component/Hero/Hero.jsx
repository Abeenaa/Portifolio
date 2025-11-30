import React from "react";
import "./Hero.css";

import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <h1>
        I’m <span className="gradient-name">Abenezer Endalew</span>,<br />
        <span className="hero-subtitle">
          Full Stack Developer based in Ethiopia.
        </span>
      </h1>

      <p>
        Crafting seamless digital experiences with modern technologies.
        Passionate about building scalable applications that make a difference.
        <br />
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button className="btn-connect">View Projects</button>
        </a>
        <a
          href="/Abenezer-Endalew-resume.pdf"
          download="Abenezer-Endalew-resume.pdf"
          className="hero-resume-btn"
        >
          <FaDownload size={18} style={{ marginRight: "10px" }} />
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
