import React from "react";
import "./Hero.css";

import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero" id="home">
      <h1>
        I’m <span className="gradient-name">Abenezer Endalew</span>,<br />
        <span className="hero-subtitle">
          Full-Stack Developer & ML Enthusiast
        </span>
      </h1>

      <p>
        Crafting seamless digital experiences with modern web technologies and intelligent machine learning solutions.
        Passionate about building scalable applications and AI-powered systems that make a difference.
        <br />
      </p>

      <div className="hero-buttons">
        <a href="#projects">
          <button className="btn-connect">View Projects</button>
        </a>
        <a
          href="/abenezer-endalew-resume (7).pdf"
          download="Abenezer-Endalew-resume.pdf"
          className="hero-resume-btn"
        >
          <FaDownload size={18} style={{ marginRight: "10px" }} />
          My Resume
        </a>
      </div>

      <div className="hero-social">
        <div className="hero-social-links">
          <a 
            href="https://www.linkedin.com/in/abenezer-endalew-b36022364" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Abeenaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:abeneendalew@gmail.com"
            className="hero-social-icon gmail"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://t.me/Abene_E" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon telegram"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
