import React from 'react';
import im2 from '../src/assets/3.png';
import im3 from '../src/assets/3.webp';
import im4 from '../src/assets/to.webp';
import im5 from '../src/assets/towing.webp';
import im6 from '../src/assets/me.png';
import im7 from '../src/assets/uni.png';
import im8 from '../src/assets/pro.png';
import im9 from '../src/assets/tt.png';
import { FaLaptopCode } from 'react-icons/fa';
import './PortfolioPage.css';

const projectsData = [
  {
    title: 'Numair Travels',
    description:
      'A modern travel agency website showcasing tours and packages. Built with PHP and Tailwind CSS for a fast, responsive UI.',
    tags: ['PHP', 'Tailwind CSS', 'MySQL', 'Responsive Design'],
    logo: im2,
    link: 'https://www.numairtravels.com',
    isImage: true,
  },
  {
    title: 'Puget Sound Limo',
    description:
      'A professional limousine booking platform with a sleek UI, fast booking system, and optimized for SEO and conversions.',
    tags: ['WordPress', 'Elementor', 'MySql', 'SEO Optimized'],
    logo: im3,
    link: 'https://pugetsoundlimo.com/',
    isImage: true,
  },
  {
    title: 'Towing Near Stockton',
    description:
      'A local business website focused on SEO and lead generation for towing services in the Stockton area.',
    tags: ['WordPress', 'SEO', 'Local Business'],
    logo: im4,
    link: 'https://towingnearstockton.com/',
    isImage: true,
  },
  {
    title: 'Towing Near Me Seattle',
    description:
      'A highly-optimized landing page for Seattle-based towing services, designed for mobile-first conversions.',
    tags: ['WordPress', 'SEO', 'Lead Gen'],
    logo: im5,
    link: 'https://towingnearmeseattle.com/',
    isImage: true,
  },
  {
    title: 'Raj Mahal Indian Cuisine',
    description:
      'A beautiful and responsive website for a restaurant, featuring an online menu, gallery, and contact information.',
    tags: ['Restaurant', 'WordPress', 'Elementor'],
    logo: im6,
    link: 'http://rajmahalindiancuisine.com',
    isImage: true,
  },
  {
    title: 'Unity App Store',
    description: 'A landing page concept for a mobile app store, built with React.',
    tags: ['Landing Page', 'React', 'Concept'],
    logo: im7,
    link: 'http://unityappstore.com',
    isImage: true,
  },
  {
    title: '92pkr.digital',
    description:
      'A digital services or currency exchange platform with a modern responsive UI.',
    tags: ['FinTech', 'PHP', 'Laravel'],
    logo: FaLaptopCode,
    link: 'https://www.92pkr.digital/',
    isImage: false,
  },
  {
    title: 'Professor Official',
    description:
      'A personal portfolio or educational platform built with Next.js for high performance and clean UI.',
    tags: ['Next.js', 'React', 'Portfolio'],
    logo: im8,
    link: 'https://professor-official.vercel.app/',
    isImage: true,
  },
  {
    title: 'TrendIron',
    description:
      'An e-commerce or affiliate marketing website focused on current trends.',
    tags: ['E-commerce', 'WordPress', 'Affiliate'],
    logo: im9,
    link: 'https://trendiron.com/',
    isImage: true,
  },
  {
    title: 'Recipe Life',
    description:
      'A food blog or recipe-sharing platform, likely built on WordPress with a custom theme.',
    tags: ['Blog', 'WordPress', 'Food'],
    logo: FaLaptopCode,
    link: 'https://recipelife.site/',
    isImage: false,
  },
  {
    title: 'Africa Growth Initiative',
    description:
      'A professional website for an initiative or non-profit organization, focused on information and impact.',
    tags: ['Non-Profit', 'WordPress', 'Informational'],
    logo: FaLaptopCode,
    link: 'https://africagrowthinitiative.com/',
    isImage: false,
  },
  {
    title: 'Dogamiya',
    description: 'An international e-commerce or brand website.',
    tags: ['E-commerce', 'Brand', 'International'],
    logo: FaLaptopCode,
    link: 'https://dogamiya.com/',
    isImage: false,
  },
  {
    title: 'Olive Garden Menus',
    description:
      'A niche affiliate or info site detailing menus for a popular restaurant chain, optimized for SEO.',
    tags: ['SEO', 'Affiliate', 'Blog'],
    logo: FaLaptopCode,
    link: 'https://olive-garden-menus.com/',
    isImage: false,
  },
  {
    title: 'Match Info',
    description:
      'A sports data or information website providing match details and stats.',
    tags: ['Sports', 'Data', 'PHP'],
    logo: FaLaptopCode,
    link: 'http://matchinfo.xyz',
    isImage: false,
  },
];

const PortfolioPage = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">
        🚀 My <span className="highlight">Web Projects</span>
      </h2>

      <p className="portfolio-subtitle">
        A collection of websites I’ve built using modern technologies and best practices.
      </p>

      <div className="portfolio-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-logo-container">
              {project.isImage ? (
                <img
                  src={project.logo}
                  alt={project.title}
                  className="portfolio-logo"
                />
              ) : (
                <project.logo className="portfolio-icon" />
              )}
            </div>

            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="portfolio-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
