import React from 'react';
import '../src/Services.css';
import { FaReact, FaMobileAlt, FaPalette } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaReact />,
    title: 'Web Application Development',
    description:
      'I build fast, secure, and scalable web applications using React, Next.js, and modern technologies — delivering exceptional performance and user experiences.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive UI/UX Design',
    description:
      'Crafting clean and mobile-first designs that look stunning and work smoothly on every screen size, from desktops to smartphones.',
  },
  {
    icon: <FaPalette />,
    title: 'Frontend Performance Optimization',
    description:
      'Enhancing speed, accessibility (a11y), and SEO to ensure your website not only looks great but also performs at the top level.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>My <span className="highlight">Services</span></h2>
        <p>What I can do to help you grow your business and ideas online</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card frosted-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
