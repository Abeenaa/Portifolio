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
              I'm a <strong>Backend-Heavy Full-Stack Developer</strong> with a passion for building
              robust, scalable systems and AI-powered solutions. I specialize in designing secure APIs,
              database architecture, and integrating machine learning models into production systems.
              <br />
              <br />My expertise spans FastAPI, Node.js, PostgreSQL, and modern backend practices.
              I believe in clean, efficient code and architecting systems that scale. Whether it's
              designing fault-tolerant microservices, implementing authentication systems, building
              AI pipelines, or optimizing database queries, I'm driven by creating backend solutions
              that power intelligent applications.
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
