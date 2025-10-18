// src/pages/Home/Home.js
import React from 'react';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Services from '../sections/Services';
import TechStack from '../sections/TechStack';
import FeaturedProjects from '../sections/FeaturedProjects';
import Testimonials from '../sections/Testimonials';
import './Home.css';
import SkillsExperience from '../sections/SkillsExperience';
import Homecontact from '../sections/Homecontact';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me Section */}
      <section id="about" className="section container">

        <AboutMe />
      </section>

      {/* 3. Services Section */}
      <section id="services" className="section container">
        <Services />
      </section>
      
      {/* 4. Tech Stack Section (More modern than "skills") */}
      <section id="tech-stack" className="section container">
        <TechStack />
      </section>

      {/* 5. Featured Projects Section */}
      <section id="projects" className="section container">
        <FeaturedProjects />
      </section>

       {/* 5. Featured Projects Section */}
      <section id="SkillsExperience" className="section container">
        <SkillsExperience />
      </section>
      
      {/* 6. Testimonials Section */}
      <section id="testimonials" className="section container">
        <Testimonials />
      </section>
      
<section id="Homecontact" className="section container">
        <Homecontact />
      </section>

      
      {/* 7. Contact Section (could be its own section component) */}
      <section id="contact-home" className="section container contact-home-section">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? I'd love to hear about it.</p>
        <a href="https://api.whatsapp.com/send?phone=923076293877" className="btn btn-primary btn-large">Get In Touch</a>
      </section>
    </div>
  );
};

export default Home;