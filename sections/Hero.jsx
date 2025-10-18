// src/sections/Hero/Hero.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../src/Hero.css';
import profileImg from '../src/assets/aryan.jpg'; // 👈 Replace with your image

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background blobs */}
      <div className="hero-blob-1"></div>
      <div className="hero-blob-2"></div>

      <div className="container hero-content">
        {/* 📝 TEXT AREA */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Aryan Iqbal</span>
            <br />
            <TypeAnimation
              sequence={[
                'Full-Stack Web Developer ',
                2000,
                'React & Next.js Expert ',
                2000,
                'Laravel & PHP Developer ',
                2000,
                'MongoDB & MySQL Specialist ',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="type-animation"
              repeat={Infinity}
            />
          </h1>
          <p className="hero-subtitle">
            I build modern, scalable, and high-performing web applications. <br />
            Specialized in <strong>React</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, <strong>Laravel</strong>, 
            <strong> MongoDB</strong>, and <strong>MySQL</strong> to bring ideas to life.
          </p>

          <div className="hero-buttons">
            <a href="/portfolio" className="btn btn-primary">
              View Portfolio ↗
            </a>
            <a href="/contact" className="btn btn-secondary">
              Hire Me ✉️
            </a>
          </div>
        </div>

        {/* 🖼 IMAGE AREA */}
        <div className="hero-image-container">
          <div className="hero-image-ring"></div>
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
