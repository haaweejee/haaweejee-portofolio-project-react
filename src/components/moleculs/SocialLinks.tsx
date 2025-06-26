import React from "react";
import { Link } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  githubUrl = "https://github.com/haaweejee", 
  linkedinUrl = "https://linkedin.com/in/haaweejee" 
}) => (
  <div className="flex flex-col items-center gap-6 my-auto">
    <Link 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#ccc] hover:text-[#010409] transition-colors duration-200"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </Link>
    <Link 
      href={linkedinUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#ccc] hover:text-[#3498db] transition-colors duration-200"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </Link>
  </div>
);

export default SocialLinks;
