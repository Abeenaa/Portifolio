import React from "react";
import "./Service.css";

function Services() {
  return (
    <div className="services-container" id="services">
      <h2 className="services-title">
        My Services
        <div className="blob"></div>
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon code-icon">
            <span>&lt;&#47;&gt;</span>
          </div>
          <h3>Web Development</h3>
          <p>
            Building fast, responsive, and modern Full stack web applications
            using React, Node.js,MySQL and best practices.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          <h3>Database Design</h3>
          <p>
            Designing efficient, normalized, and scalable schemas with MongoDB,
            PostgreSQL & MySQL.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon lightning-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9v8l10-12h-9V2" />
            </svg>
          </div>
          <h3>API Development</h3>
          <p>
            Building fast, secure REST & GraphQL APIs with Node.js, Express, and
            Prisma.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="m15.5 3.5-1.5 1.5m0 0L12 7m0 0L9.5 5M12 7l1.5 1.5M9.5 20.5L12 17m0 0l2.5 3.5M12 17l-1.5-1.5" />
              <path d="m20.5 9.5-3.5 2.5m0 0L15 12m0 0l2.5-2.5M15 12l-1.5 1.5M3.5 14.5L7 12m0 0L4.5 9.5M7 12l1.5-1.5" />
            </svg>
          </div>
          <h3>Machine Learning</h3>
          <p>
            Developing intelligent applications with Python, scikit-learn, and TensorFlow for predictive analytics and data-driven solutions.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              <circle cx="7" cy="14" r="1" />
              <circle cx="11" cy="11" r="1" />
              <circle cx="18" cy="8" r="1" />
            </svg>
          </div>
          <h3>Data Analysis</h3>
          <p>
            Extracting insights from complex datasets using Python, pandas, and visualization tools to drive informed business decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
