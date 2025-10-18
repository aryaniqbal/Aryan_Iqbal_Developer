import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("✅ Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h1 className="page-title">
          Get <span className="highlight">In Touch</span>
        </h1>
        <p className="page-subtitle">
          I’m open to discussing new projects, creative ideas, or opportunities
          to collaborate.
        </p>

        <div className="contact-content">
          {/* === Left Info Section === */}
          <div className="contact-info frosted-card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of the following methods:</p>
            <ul>
              <li>
                <FaEnvelope className="icon" />
                <strong>Email:</strong> your.email@example.com
              </li>
              <li>
                <FaPhoneAlt className="icon" />
                <strong>Phone:</strong> +1 (234) 567-890
              </li>
              <li>
                <FaMapMarkerAlt className="icon" />
                <strong>Location:</strong> Karachi, Pakistan
              </li>
            </ul>
          </div>

          {/* === Right Form Section === */}
          <div className="contact-form-wrapper frosted-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
