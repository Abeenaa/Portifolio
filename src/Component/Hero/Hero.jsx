import "./Hero.css";
import profile from "../../assets/abenipro.jpg";
import { FaDownload } from "react-icons/fa";

function Hero() {
  const handleResumeClick = () => {
    window.open("/abeni-endalew-CV.pdf", "_blank");
  };

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1>
            <span className="gradient-name">Abenezer Endalew</span>
          </h1>
          <p className="hero-subtitle">
            Backend-Focused Full-Stack Engineer
          </p>

          <p>
            I build practical, end-to-end applications with a strong focus on backend development, APIs, databases, and business logic. I work with technologies including Node.js, NestJS, FastAPI, React, Next.js, PostgreSQL, and MongoDB, and I'm also interested in building AI-powered solutions that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="btn-connect" aria-label="View my projects section">View Projects</button>
            </a>
            <button onClick={handleResumeClick} className="hero-resume-btn" aria-label="Download my CV in PDF format">
              <FaDownload size={18} style={{ marginRight: "10px" }} />
              Download CV
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Abenezer Endalew" className="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
