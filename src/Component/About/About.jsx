import React from "react";
import "./About.css";
import Services from "../Service/Service";

function About() {
  return (
    <div>
      <div className="about-container" id="about">
        <h2 className="about-title">
          About <span>me</span>
        </h2>

        <div className="about-content">
          <div className="about-right">
            <p className="about-desc">
              I'm a <strong>Full-Stack Developer</strong> passionate about
              building scalable, high-performance applications that solve
              real-world problems. I specialize in creating seamless digital
              experiences across the entire stack — from intuitive React
              frontends to robust FastAPI and Node.js backends.
              <br />
              <br />I believe in clean code, thoughtful architecture, and
              technology that actually matters. Whether it's designing efficient
              databases, building secure APIs, integrating machine learning
              models, or planning complex system architectures, I'm driven by
              the challenge of creating products that deliver value and scale.
            </p>
          </div>
        </div>
      </div>

      <div className="education-container" id="education">
        <h2 className="education-title">
          My <span>Education</span>
        </h2>

        <div className="education-grid">
          <div className="edu-card">
            <h4>BSc In Software Engineering</h4>
            <h2>Haramaya University</h2>
            <div className="edu-year">2023 — 2027 (Expected)</div>
            <p>
              Currently pursuing a dual-degree program with a strong focus on
              full-stack development, system design, algorithms, and modern
              software practices.
            </p>
          </div>

          <div className="edu-card">
            <h4>BSc In Management</h4>
            <h2>Haramaya University</h2>
            <div className="edu-year">2024 — 2027 (Expected)</div>
            <p>
              Studying business management alongside software engineering to
              blend technical expertise with leadership, project management, and
              entrepreneurial skills.
            </p>
          </div>
        </div>
      </div>

      <Services />
    </div>
  );
}

export default About;
