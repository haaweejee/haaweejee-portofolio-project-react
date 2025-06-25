import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import ProjectHistory from './components/ProjectHistory';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Articles from './components/Articles';
import HeroUINavBar from './components/HeroUINavBar';
import HeroUIHero from './components/HeroUIHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import HeroUIWorkExperience from './components/HeroUIWorkExperience';

const App: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen m-0 p-0 font-sans font-normal leading-[1.5] text-white bg-[#222] bg-no-repeat bg-top bg-cover">
      {/* <Header /> */}
      <HeroUINavBar />
      <HeroUIHero />
      {/* <WorkExperience /> */}
      <HeroUIWorkExperience />
      <ProjectHistory />
      {/* <Articles /> */}
      <ContactMe />
      <Footer />
      {showTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#3498db] hover:bg-[#2176bd] text-white rounded-full w-16 h-16 shadow-lg transition-colors duration-300 flex items-center justify-center"
          aria-label="Back to Top"
        >
          <FontAwesomeIcon icon={faArrowUp} size="1x" />
        </button>
      )}
    </div>
  );
};

export default App;
