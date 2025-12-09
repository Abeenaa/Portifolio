import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">
        My Latest Work
        <div className="blob"></div>
      </h2>

      <div className="projects-grid">
        {/* Netflix Clone */}
        <div className="project-card">
          <div className="project-image netflix-bg"></div>
          <div className="project-content">
            <h3>Netflix Clone</h3>
            <p>
              A full-featured Netflix replica with movie browsing, search,
              trailers, and personalized recommendations powered by TMDB API.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TMDB API</span>
            </div>
            <div className="project-links">
              <a
                href="https://abeenaa.github.io/Netflix-Clone/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
              <a
                href="https://github.com/Abeenaa/Netflix-Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                <FaGithub size={22} /> Code
              </a>
            </div>
          </div>
        </div>

        {/* Amazon Replica */}
        <div className="project-card">
          <div className="project-image amazon-bg"></div>
          <div className="project-content">
            <h3>Amazon Replica</h3>
            <p>
              An e-commerce platform with product catalog, cart, authentication,
              payment integration, and admin dashboard using FakeStore API.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Firebase</span>
            </div>
            <div className="project-links">
              <a
                href="https://abb-amazon-replica.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
              <a
                href="https://github.com/Abeenaa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                <FaGithub size={22} /> Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image teacher-bg"></div>
          <div className="project-content">
            <h3>Teacher Evaluation System</h3>
            <p>
              A full-stack web app enabling students to anonymously evaluate
              teachers with detailed feedback forms. Features admin dashboard
              with analytics and result visualization.
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Abeenaa/Teacher-evaluation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                style={{ opacity: 0.7, cursor: "not-allowed" }}
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
              <a
                href="https://github.com/Abeenaa/Teacher-evaluation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                <FaGithub size={22} /> Code
              </a>
            </div>
            <div style={{ marginTop: "12px", fontSize: "14px", color: "#aaa" }}>
              Group university project • My role: Frontend UI, form logic &
              database integration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
