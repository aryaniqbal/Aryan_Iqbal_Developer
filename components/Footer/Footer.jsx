// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
// Import the icons we need
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Makes the scroll animated
    });
  };

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        {/* --- Top part of the footer with content --- */}
        <div className="footer-top">
          <div className="footer-brand">
            {/* Using your name as the brand/logo */}
            <h2>Aryan Iqbal</h2>
            <p>Full-Stack Web Developer</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/your-username" // <-- Add your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username" // <-- Add your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username" // <-- Add your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* --- Bottom part with copyright --- */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Aryan Iqbal. All rights reserved.
          </p>
        </div>
      </div>

      {/* --- Back to Top Button --- */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;