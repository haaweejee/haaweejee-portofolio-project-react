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
                <li>
                <a href="#home">Home</a>
                </li>
                <li>
                <a href="#experience">Experience</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>
      </header>
  );
};

export default Header;