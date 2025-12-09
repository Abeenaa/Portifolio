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
        {/* 1. Web Development  */}
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

        {/* 2. Database Design */}
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

        {/* 3. API Development  */}
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
      </div>
    </div>
  );
}

export default Services;
