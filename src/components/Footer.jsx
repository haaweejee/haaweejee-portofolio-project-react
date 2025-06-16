import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-title">
      <span>Haawee</span><span className="footer-blue">jee.</span>
    </div>
    <nav className="footer-nav">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#service">Service</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact Me</a>
    </nav>
    <div className="footer-socials">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://upwork.com/" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
        <i className="fab fa-upwork"></i>
      </a>
      <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
        <i className="fab fa-medium"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </footer>
);

export default Footer;