import React from 'react';
import './Header.css';

const Header = () => {
  return (
     <header className="header">
        <div className="logo">
          <span>Haaw</span><span className="blue">eejee</span><span className="dot">.</span>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Experience</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;