import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo with hover glow */}
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

      {/* Desktop Menu */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setIsOpen(false)}>
            Education
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      {/* Connect Button */}
      <a href="#contact" className="nav-connect">
        Connect With Me
      </a>

      {/* Mobile Hamburger Toggle */}
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default NavBar;
