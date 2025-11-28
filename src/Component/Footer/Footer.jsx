import React from "react";
import "./Footer.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left: Logo + Name */}
        <div className="footer-brand">
          <h3>Abenezer Endalew</h3>
          <p>Full Stack Developer</p>
        </div>

        {/* Right: Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abenezer-endalew-b36022364"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Abeenaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <FaGithub />
          </a>
          <a href="mailto:abeneendalew@gmail.com" className="social-icon gmail">
            <FaEnvelope />
          </a>
          <a
            href="https://t.me/Abene_E"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Abenezer Endalew. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
