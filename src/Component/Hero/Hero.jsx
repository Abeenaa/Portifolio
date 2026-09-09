import "./Hero.css";
import profile from "../../assets/abenipro.jpg";

function Hero() {
  const handleResumeClick = () => {
    window.open("/abeni-endalew-CV.pdf", "_blank");
  };

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          {/* <p className="hero-greeting">Hi, I'm</p> */}
          <h1>
            <span className="gradient-name">Abenezer Endalew</span>
          </h1>
          <p className="hero-subtitle">
         Backend-Focused Full-Stack Engineer
          </p>

          <p>
           I design and build software that solves real problems-from backend architecture and APIs to the interfaces people actually use. I care about how systems work under the hood, how they scale, and how they hold up in the real world.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="btn-connect" aria-label="View my projects section">View My Work</button>
            </a>
            <button onClick={handleResumeClick} className="hero-resume-btn" aria-label="Download my CV in PDF format">
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
