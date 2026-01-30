import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaPython, 
  FaFire
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMysql,
  SiFlask
} from "react-icons/si";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">
        My Latest Work
        <div className="blob"></div>
      </h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image netflix-bg"></div>
          <div className="project-content">
            <h3>Netflix Clone</h3>
            <p>
              A full-featured Netflix replica with movie browsing, search,
              trailers, and personalized recommendations powered by TMDB API.
            </p>
            <div className="project-tech">
              <span><FaReact className="tech-icon" /> React</span>
              <span><SiTailwindcss className="tech-icon" /> Tailwind CSS</span>
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

        <div className="project-card">
          <div className="project-image amazon-bg"></div>
          <div className="project-content">
            <h3>Amazon Replica</h3>
            <p>
              An e-commerce platform with product catalog, cart, authentication,
              payment integration, and admin dashboard using FakeStore API.
            </p>
            <div className="project-tech">
              <span><FaReact className="tech-icon" /> React</span>
              <span><FaCss3Alt className="tech-icon" /> CSS</span>
              <span><FaNodeJs className="tech-icon" /> Node.js</span>
              <span><SiExpress className="tech-icon" /> Express</span>
              <span><FaFire className="tech-icon" /> Firebase</span>
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
                href="https://github.com/Abeenaa/Amazon-replica-frontend"
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
          <div className="project-image mindcare-bg"></div>
          <div className="project-content">
            <h3>MindCare</h3>
            <p>
              A mental health and stress prediction platform for students. 
              Features assessment tools, instant insights, and resources to help 
              students understand and improve their wellbeing.
            </p>
            <div className="project-tech">
              <span><FaReact className="tech-icon" /> React</span>
              <span><FaCss3Alt className="tech-icon" /> CSS</span>
              <span>Machine Learning</span>
              <span><FaPython className="tech-icon" /> Python</span>
              <span><SiFlask className="tech-icon" /> Flask</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Abeenaa/MindCare"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                style={{ opacity: 0.7, cursor: "not-allowed" }}
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
              <a
                href="https://github.com/Abeenaa/MindCare"
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
              <span><FaHtml5 className="tech-icon" /> HTML</span>
              <span><FaCss3Alt className="tech-icon" /> CSS</span>
              <span><FaJs className="tech-icon" /> JavaScript</span>
              <span><FaPhp className="tech-icon" /> PHP</span>
              <span><SiMysql className="tech-icon" /> MySQL</span>
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
            <div className="project-role">
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
