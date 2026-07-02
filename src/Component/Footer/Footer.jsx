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
        <div className="footer-brand">
          <h3>Abenezer Endalew</h3>
          <p>Backend-Heavy Full-Stack Developer & ML/AI Enthusiast</p>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abenezer-endalew-b36022364"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="Visit LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Abeenaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="Visit GitHub profile"
          >
            <FaGithub />
          </a>
          <a href="mailto:abeneendalew@gmail.com" className="social-icon gmail" aria-label="Send email">
            <FaEnvelope />
          </a>
          <a
            href="https://t.me/Abene_E"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon telegram"
            aria-label="Visit Telegram profile"
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
