import "./About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">
        About <span>me</span>
      </h2>

      <div className="about-content">
        <div className="about-right">
          <p className="about-desc">
            I'm a Full-Stack Developer with strong backend focus, building reliable systems that solve real business problems. Experience spans Node.js, NestJS, FastAPI, PostgreSQL, MongoDB, Prisma, React, and Next.js. I've built multi-branch operations, inventory management systems, payment processing, real-time communication, and role-based access control.
            <br />
            <br />
            I prioritize maintainable code, thoughtful architecture, and understanding the problem before implementing solutions. My goal is creating secure, scalable systems that are genuinely useful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
