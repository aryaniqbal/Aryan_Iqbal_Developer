import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../src/assets/aryan02.png";
import AboutME from '../../sections/AboutMe'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Porjects</Link></li>
           <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <a href="https://api.whatsapp.com/send?phone=923076293877"  className="hire-btn">Hire Me</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
