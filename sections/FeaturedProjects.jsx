import React from 'react';
import '../src/FeaturedProjects.css';
import im2 from'../src/assets/3.png';
import im3 from '../src/assets/3.webp';

// ✅ Featured Projects Data
const projects = [
  {
    title: 'Numair Travels',
    description: 'A modern and responsive travel agency website designed to showcase tours, bookings, and packages. Built with React and Tailwind CSS for fast performance and smooth UI.',
    tags: ['PHP', 'Tailwind CSS','MySQL', 'Responsive Design'],
    logo: im2,   // 🔸 Add your logo image here
    link: 'https://www.numairtravels.com'
  },
  {
    title: 'Puget Sound Limo',
    description: 'A professional limousine booking platform with a sleek UI, fast booking system, and optimized for SEO and conversions. Ideal for transportation businesses.',
    tags: ['ELementor', 'MySql', 'SEO Optimized'],
    logo: im3,  // 🔸 Add your logo image here
    link: 'https://pugetsoundlimo.com/'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section">
      <h2 className="projects-title">
        Featured <span className="highlight">Projects</span>
      </h2>
      <p className="projects-subtitle">
        Here are a few of my professional web projects designed to deliver clean UI, high performance, and real business impact.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card frosted-card">
            <div className="project-logo-container">
              <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a href="/portfolio" className="view-more-link">
          View More Projects →
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
