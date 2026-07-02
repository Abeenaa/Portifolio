import "./Hero.css";
import profile from "../../assets/abenipro.jpg";
import { FaDownload } from "react-icons/fa";

function Hero() {
  const handleResumeClick = () => {
    window.open("/abenezer-endalew-cv.pdf", "_blank");
  };

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="gradient-name">Abenezer Endalew</span>
            <br />
            <span className="hero-subtitle">
              Backend-Heavy Full-Stack Developer & ML/AI Enthusiast
            </span>
          </h1>

          <p>
            Building robust backend systems and intelligent AI-powered solutions.
            I specialize in designing scalable architectures, secure APIs, and machine learning
            integration. Proficient in FastAPI, Node.js, and modern database design—delivering
            production-ready systems that scale.
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

      {/* <div className="hero-social">
        <div className="hero-social-links">
          <a 
            href="https://www.linkedin.com/in/abenezer-endalew-b36022364" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Abeenaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:abeneendalew@gmail.com"
            className="hero-social-icon gmail"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://t.me/Abene_E" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-icon telegram"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
