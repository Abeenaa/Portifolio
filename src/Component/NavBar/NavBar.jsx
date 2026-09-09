import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detect active section
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a href="#home">
        <img
          src={logo}
          alt="Abenezer Endalew"
          className="nav-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (isOpen) setIsOpen(false);
          }}
          style={{ cursor: "pointer" }}
        />
      </a>

      <div className="nav-right-section">
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className={activeSection === "about" ? "active" : ""}>
              About 
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)} className={activeSection === "skills" ? "active" : ""}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setIsOpen(false)} className={activeSection === "experience" ? "active" : ""}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className={activeSection === "projects" ? "active" : ""}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className={activeSection === "contact" ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
