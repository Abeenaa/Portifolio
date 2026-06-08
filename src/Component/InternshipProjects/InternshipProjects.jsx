import React from "react";
import "./InternshipProjects.css";
import { FaGithub, FaExternalLinkAlt, FaAward } from "react-icons/fa";

function InternshipProjects() {
  const internshipProjects = [
    {
      id: 1,
      title: "Innobiz-K Ethiopia Platform",
      company: "Innobiz-K Ethiopia (Ink)",
      role: "Full Stack Developer Intern",
      description: "Ethiopia's startup ecosystem platform empowering entrepreneurial journeys by connecting startups with resources, mentorship, and funding opportunities. A comprehensive platform for startup discovery, investor connections, and ecosystem growth.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
      features: [
        "Startup and investor profile management",
        "Ecosystem discovery and networking",
        "Resource and mentorship connections",
        "Funding opportunity showcase",
        "Responsive design for all devices"
      ],
      github: "https://github.com/Abeenaa/Innobiz-k-ethiopia-platform",
      live: "https://innobiz-k-ethiopia.com",
      image: "startup-ecosystem",
      highlights: [
        "Full Stack Development",
        "Database Design",
        "API Development",
        "Frontend Implementation"
      ]
    },
    {
      id: 2,
      title: "AI-Powered Learning Platform",
      company: "Fluentian",
      role: "Backend Developer Intern",
      description: "Advanced learning platform powered by AI technology for personalized educational experiences. Built with FastAPI backend, JWT authentication, and scalable architecture to serve modern learners with intelligent content delivery.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "JWT", "React", "REST APIs"],
      features: [
        "AI-powered personalized learning paths",
        "Secure authentication system with JWT",
        "Scalable backend architecture",
        "RESTful API design",
        "Database integration and optimization",
        "Real-time learning analytics"
      ],
      github: "https://github.com/Abeenaa/AI-Powered--Learning-Platform",
      live: null,
      image: "ai-learning",
      highlights: [
        "Backend Development",
        "AI Integration",
        "Security Implementation",
        "API Design"
      ]
    }
  ];

  return (
    <div className="internship-projects-container" id="internship-projects">
      <div className="internship-header">
        <div className="internship-badge">
          <FaAward className="badge-icon" />
          <span>Internship Projects</span>
        </div>
        <h2 className="internship-title">
          Real-World Projects From Professional Internships
        </h2>
        <p className="internship-subtitle">
          Practical experience building scalable solutions during my internships at leading tech companies
        </p>
      </div>

      <div className="internship-grid">
        {internshipProjects.map((project) => (
          <div key={project.id} className="internship-card">
            <div className="internship-card-header">
              <div className="company-badge">
                <span>{project.company}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
            </div>

            <div className="internship-card-body">
              <p className="project-description">{project.description}</p>

              <div className="project-section">
                <h4 className="section-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4 className="section-title">Technologies Used:</h4>
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h4 className="section-title">My Contributions:</h4>
                <div className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <span className="highlight-dot">●</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="internship-card-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <FaGithub size={18} />
                View Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipProjects;
