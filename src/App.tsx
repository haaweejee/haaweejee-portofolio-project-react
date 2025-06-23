import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import ProjectHistory from './components/ProjectHistory';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen m-0 p-8 font-sans font-normal leading-[1.5] text-white bg-[url('/background.svg')] bg-no-repeat bg-top bg-cover">
      <Header />
      <Hero />
      <WorkExperience />
      <ProjectHistory />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
