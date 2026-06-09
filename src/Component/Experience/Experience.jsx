import "./Experience.css";
import mintLogo from "../../assets/mint.png";
import fluentianLogo from "../../assets/fluntian.png";
import inkLogo from "../../assets/ink.png";

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Fluentian",
      position: "Backend Developer",
      duration: "2026-Present",
      location: "Ethiopia",
      logo: fluentianLogo,
      description:
        "Developed robust authentication systems using FastAPI and JWT, contributing to an AI-powered learning platform. Designed and tested RESTful APIs ensuring secure, scalable workflows with database integration and backend security best practices.",
    },
    {
      id: 2,
      company: "Ministry of Innovation and Technology (MInT)",
      position: "Software Engineer",
      duration: " Feb 2026 - Ended",
      location: "Ethiopia",
      logo: mintLogo,
      description:
        "Contributing to the development of a startup-investor matching platform that connects innovation entrepreneurs with capital and mentorship. Collaborating with multidisciplinary teams to design scalable architecture and backend systems for Ethiopia's innovation ecosystem.",
    },
    {
      id: 3,
      company: "Innobiz-K Ethiopia (Ink)",
      position: "Full Stack Developer",
      duration: "2026 - Ended",
      location: "Ethiopia",
      logo: inkLogo,
      description:
        "Leading the redesign and development of the organization's web platform using modern technologies. Implementing responsive design, frontend-backend integration, and scalable features to enhance user experience across all devices.",
    },
  ];

  return (
    <div className="experience-container" id="experience">
      <h2 className="experience-title">Work Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-logo">
              <img src={exp.logo} alt={exp.company} />
            </div>

            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="position-title">{exp.position}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="meta-duration">{exp.duration}</div>
                  <div className="meta-location">{exp.location}</div>
                </div>
              </div>

              <div className="experience-body">
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
