

import React from 'react';
import '../src/AboutMe.css';
import profileImg from '../src/assets/aryan.jpg'; // Replace with your own image

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* === Left: Profile Image === */}
        <div className="about-image-container">
          <div className="about-image-ring"></div>
          <img src={profileImg} alt="Profile" className="about-profile-img" />
        </div>

        {/* === Right: About Text === */}
        <div className="about-text">
          <h2>About <span className="highlight">Me</span></h2>
          <h3>Turning Ideas into Powerful Digital Products 🚀</h3>
          <p>
            I’m a dedicated <strong>Full Stack Web Developer</strong> with a strong passion 
            for building modern, scalable, and responsive web applications. My expertise 
            includes <strong>React</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, 
            <strong> Laravel</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>.
          </p>
          <p>
            I focus on creating clean, efficient, and maintainable code that not only works 
            but delivers seamless user experiences. My development approach combines creative 
            design with solid technical knowledge, ensuring every project is fast, secure, 
            and visually appealing.
          </p>
          <p>
            Beyond coding, I’m constantly learning new technologies, improving UI/UX skills, 
            and exploring better ways to build the web of tomorrow. My mission is simple — 
            to craft digital experiences that inspire and empower users worldwide.
          </p>
          <a href="/about" className="btn about-btn">Discover More</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
