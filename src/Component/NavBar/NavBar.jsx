import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png"; // your transparent AE logo

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="AE Logo" className="nav-logo" />

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Education</li>
        <li>Services</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default NavBar;
