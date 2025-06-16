import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faUpwork, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './SocialMedia.css';

const SocialMedia = () => (
  <div className="social-media">
    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="https://www.upwork.com/freelancers/~username" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faUpwork} size="2x" />
    </a>
    <a href="https://medium.com/@username" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faMedium} size="2x" />
    </a>
    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </div>
);

export default SocialMedia;