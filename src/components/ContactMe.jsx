import React from 'react';
import './ContactMe.css';

const ContactMe = () => (
  <section id='contact' className="contactme-section">
    <div className="contactme-container">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="contactme-avatar"
      />
      <p className="contactme-desc">
            Android Developer with 3+ years of experience in mobile app development, specializing in building high-quality,
            scalable applications. Currently working at Salt Indonesia as an Android Developer, where I contributed to the
            development of the Dunia Games Android application by Telkomsel. Passionate about mobile development, with
            expertise in native Android development (Kotlin, Jetpack Compose) and experience in hybrid app development
            using Flutter. Dedicated to delivering seamless user experiences and writing clean, maintainable code.      
        </p>
      <div className="contactme-actions">
        <a href="https://www.linkedin.com/in/haaweejee/" className="contactme-btn contactme-btn-purple">
          Let&apos;s Connect <span className="contactme-btn-arrow">→</span>
        </a>
        <a href="https://wa.me/6282217106768" className="contactme-btn contactme-btn-green">
          Let&apos;s Chat <span className="contactme-btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactMe;