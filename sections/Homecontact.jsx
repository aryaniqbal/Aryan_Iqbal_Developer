import React, { useState } from 'react';
import '../src/ContactSection.css';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // --- NEW FIELDS ADDED ---
    location: '',
    budget: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: '', type: '' });

    // --- UPDATED: Validation Check ---
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.location.trim() || // Added
      !formData.budget.trim() || // Added
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus({
        message: 'Please fill out all required fields.',
        type: 'error',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost/send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          message: 'Message Sent Successfully!',
          type: 'success',
        });

        // --- UPDATED: WhatsApp Message ---
        const whatsappNumber = '923076293877';
        const whatsappMessage = encodeURIComponent(
          `📩 New Contact Message\n\nName: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\nBudget: ${formData.budget}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
        );
        window.open(
          `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`,
          '_blank'
        );

        // --- UPDATED: Form Reset ---
        setFormData({
          name: '',
          email: '',
          location: '',
          budget: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus({
          message: 'Something went wrong on the server. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error(error);
      setFormStatus({
        message: 'Network error. Please check your connection.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h3 className="section-pretitle">Get in Touch</h3>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's discuss your Project</h2>
            <p className="contact-intro">
              I'm always open to discussing new projects, freelance
              opportunities, or any questions you might have.
            </p>

            <ul className="contact-info-list">
              <li>
                <div className="contact-icon-bg">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-info-text">
                  <h4>Address:</h4>
                  <p>LDA Avenue, Lahore, Pakistan</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-bg">
                  <FaEnvelope />
                </div>
                <div className="contact-info-text">
                  <h4>Mail Me:</h4>
                  <a href="mailto:aryaniqbal789@gmail.com">
                    aryaniqbal789@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-icon-bg">
                  <FaPhoneAlt />
                </div>
                <div className="contact-info-text">
                  <h4>Call / WhatsApp:</h4>
                  <a href="https://api.whatsapp.com/send?phone=923076293877">
                    +92 307 629 3877
                  </a>
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* --- NEW: Location Field --- */}
              {/* This is a standalone input, so we wrap it in a .row to use the existing margin style */}
              <div className="row">
                <input
                  type="text"
                  name="location"
                  placeholder="Location *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* --- NEW: Budget & Subject Row --- */}
              <div className="row">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget *"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;