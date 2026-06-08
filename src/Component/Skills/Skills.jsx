import React from "react";
import "./Skills.css";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaPython, 
  FaGitAlt,
  FaFire,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMysql, 
  SiScikitlearn, 
  SiTensorflow, 
  SiPandas, 
  SiNumpy,
  SiVite,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiSupabase,
  SiPrisma
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">My Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon frontend-icon">
              <FaReact />
            </div>
            <h3>Frontend</h3>
          </div>
          <div className="skills-list">
            <div className="skill-item">
              <FaReact className="skill-logo react" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <SiNextdotjs className="skill-logo nextjs" />
              <span>Next.js</span>
            </div>
            <div className="skill-item">
              <FaJs className="skill-logo javascript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <SiTailwindcss className="skill-logo tailwind" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon backend-icon">
              <FaNodeJs />
            </div>
            <h3>Backend</h3>
          </div>
          <div className="skills-list">
            <div className="skill-item">
              <FaPython className="skill-logo python" />
              <span>FastAPI</span>
            </div>
            <div className="skill-item">
              <FaNodeJs className="skill-logo nodejs" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <SiExpress className="skill-logo express" />
              <span>Express</span>
            </div>
            <div className="skill-item">
              <FaPhp className="skill-logo php" />
              <span>PHP</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon db-icon">
              <SiMysql />
            </div>
            <h3>Database</h3>
          </div>
          <div className="skills-list">
            <div className="skill-item">
              <SiSupabase className="skill-logo supabase" />
              <span>Supabase</span>
            </div>
            <div className="skill-item">
              <SiMysql className="skill-logo mysql" />
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <FaFire className="skill-logo firebase" />
              <span>Firebase</span>
            </div>
            <div className="skill-item">
              <FaPython className="skill-logo python" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon tools-icon">
              <FaGitAlt />
            </div>
            <h3>Tools & ORM</h3>
          </div>
          <div className="skills-list">
            <div className="skill-item">
              <SiPrisma className="skill-logo prisma" />
              <span>Prisma ORM</span>
            </div>
            <div className="skill-item">
              <FaGithub className="skill-logo github" />
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <FaDocker className="skill-logo docker" />
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <SiVercel className="skill-logo vercel" />
              <span>Vercel</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon ml-icon">
              <FaPython />
            </div>
            <h3>Machine Learning</h3>
          </div>
          <div className="skills-list">
            <div className="skill-item">
              <FaPython className="skill-logo python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <SiScikitlearn className="skill-logo sklearn" />
              <span>Scikit-learn</span>
            </div>
            <div className="skill-item">
              <SiTensorflow className="skill-logo tensorflow" />
              <span>TensorFlow</span>
            </div>
            <div className="skill-item">
              <SiPandas className="skill-logo pandas" />
              <span>Pandas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;