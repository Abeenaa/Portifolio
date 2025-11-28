import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-container" id="education">
      <h2 className="education-title">
        My <span>Education</span>
        <div className="blob"></div>
      </h2>

      <div className="education-grid">
        {/* Software Engineering */}
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

        {/* Management */}
        <div className="edu-card">
          <h4>BSc In Management</h4>
          <h2>Haramaya University</h2>
          <div className="edu-year">2024 — 2027 (Expected)</div>
          <p>
            Studying business management alongside software engineering to blend
            technical expertise with leadership, project management, and
            entrepreneurial skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
