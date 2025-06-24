import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import ProjectHistory from './components/ProjectHistory';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Articles from './components/Articles';
import HeroUINavBar from './components/HeroUINavBar';
import HeroUIHero from './components/HeroUIHero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen m-0 p-0 font-sans font-normal leading-[1.5] text-white bg-[#333] bg-no-repeat bg-top bg-cover">
      {/* <Header /> */}
      <HeroUINavBar />
      <HeroUIHero />
      <WorkExperience />
      <ProjectHistory />
      {/* <Articles /> */}
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
