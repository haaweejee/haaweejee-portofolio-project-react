import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-title">
      <span>Haawee</span><span className="footer-blue">jee.</span>
    </div>
    <nav className="footer-nav">
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact Me</a>
    </nav>
  </footer>
);

export default Footer;