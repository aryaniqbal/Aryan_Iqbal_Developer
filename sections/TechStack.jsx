import React from 'react';
import '../src/TechStack.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaFigma, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiFirebase, SiMongodb, SiTailwindcss, SiSass } from 'react-icons/si';

const tech = [
  { name: 'JavaScript (ES6+)', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3 / SASS', icon: <SiSass /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git & GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'PHP', icon: <FaPhp /> },
];

const TechStack = () => {
  return (
    <section className="tech-stack-section" id="tech">
      <h2 className="tech-title">
        My <span className="highlight">Tech Stack</span>
      </h2>
      <p className="tech-intro">
        These are the tools and technologies I love working with to build modern, scalable, and user-friendly applications.
      </p>
      <div className="tech-grid">
        {tech.map((item, index) => (
          <div key={index} className="tech-item frosted-card">
            <span className="tech-icon">{item.icon}</span>
            <span className="tech-name">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
