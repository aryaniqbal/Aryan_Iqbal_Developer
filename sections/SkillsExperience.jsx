import React, { useState, useEffect, useRef } from "react";
import "../src/SkillsExperience.css";

const SkillsExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [animate, setAnimate] = useState(false);
  const [counters, setCounters] = useState([]);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML", level: 95, color: "#6c63ff" },
    { name: "CSS", level: 85, color: "#f7c600" },
    { name: "PHP", level: 90, color: "#e74c3c" },
    { name: "Javascript", level: 90, color: "#ff6b6b" },
    { name: "Angular JS", level: 95, color: "#ffffffff" },
    { name: "WordPress", level: 85, color: "#00c3ff" },
    { name: "React JS", level: 90, color: "#61dafb" },
    { name: "Next JS", level: 80, color: "#ffffffff" },
    { name: "MongoDB", level: 75, color: "#4caf50" },
    { name: "MySQL", level: 85, color: "#00758f" },
  ];

  const experiences = [
    { role: "UI Designer", year: "2022 - 2024", company: "Freelancer" },
    { role: "Web Designer", year: "2022 - 2025", company: "Freelancer" },
    { role: "Product Designer", year: "2023 - 2025", company: "Freelancer" },
    { role: "Apps Designer", year: "2023 - 2025", company: "Freelancer" },
  ];

  const education = [
    { degree: "Matriculation", year: "2018", school: "Govt. High School" },
    { degree: "FSC (Pre-Engineering)", year: "2020", school: "GC College" },
    { degree: "BSCS", year: "2021 - 2025", school: "Superior University (CGPA 3.49)" },
  ];

  // ✨ Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Number counter animation
  useEffect(() => {
    if (animate) {
      const duration = 1500;
      const start = Date.now();

      const update = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const newValues = skills.map((s) => Math.floor(s.level * progress));
        setCounters(newValues);

        if (progress < 1) requestAnimationFrame(update);
      };
      update();
    }
  }, [animate]);

  return (
    <section ref={sectionRef} className={`skills-section ${animate ? "fade-in" : ""}`}>
      <h2 className="skills-title">
        Skills <span className="highlight">& Experience</span>
      </h2>
      <p className="skills-subtitle">
        A blend of technical expertise and practical experience. Here’s what I bring to the table.
      </p>

      <div className="skills-container">
        {/* 🧠 Skills Progress Bars */}
        <div className="skills-left">
          <h3 className="skills-heading">My Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-name">
                <span>{skill.name}</span>
                <span>{counters[index] || 0}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${counters[index] || 0}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* 🏢 Experience / 🎓 Education Tabs */}
        <div className="skills-right">
          <div className="tab-buttons">
            <button
              className={activeTab === "experience" ? "tab active" : "tab"}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={activeTab === "education" ? "tab active" : "tab"}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "experience" &&
              experiences.map((exp, index) => (
                <div key={index} className="exp-item">
                  <h4>{exp.role}</h4>
                  <span className="exp-year">{exp.year}</span>
                  <p>{exp.company}</p>
                </div>
              ))}

            {activeTab === "education" &&
              education.map((edu, index) => (
                <div key={index} className="exp-item">
                  <h4>{edu.degree}</h4>
                  <span className="exp-year">{edu.year}</span>
                  <p>{edu.school}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
