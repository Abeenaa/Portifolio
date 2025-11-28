import React from "react";
import "./Hero.css";
import profile from "../../assets/abenisha-removebg-preview.png";

function Hero() {
  return (
    <div className="hero">
      <img src={profile} alt="Your Name" className="hero-img" />

      <h1>
        I’m <span className="gradient-name">Abenezer Endalew</span>,<br />
        <span className="hero-subtitle">
          FullStack Developer based in Ethiopia.
        </span>
      </h1>

      <p>
        Crafting seamless digital experiences with modern technologies.
        Passionate about building scalable applications that make a difference.
        <br />
      </p>

      <div className="hero-buttons">
        <a href="#contact">
          <button className="btn-connect">Connect With Me</button>
        </a>
        <button className="btn-resume">My Resume</button>
      </div>
    </div>
  );
}

export default Hero;
