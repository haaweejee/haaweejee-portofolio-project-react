import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <h2 className="hero-intro">Hello, I'm</h2>
      <h1 className="hero-name">Hendrawan Wibowo</h1>
      <h3 className="hero-role">
        <Typewriter
          options={{
            strings: [
              'Software Engineer',
              'Android Developer',
              'Mobile Developer'
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </h3>
      {/* <p className="hero-desc">
        Mobile Developer with 3+ years of experience in mobile app development. I can help you to bring your idea to reality with quality.
      </p> */}
      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => window.open('https://fastwork.id/user/haaweejee/mobile-application-41653394?source=seller-center_my-service')}>Hire Me</button>
        <button className="btn btn-primary" onClick={() => window.open('https://drive.google.com/file/d/1eb_LOQZ-Er1baGU5aNUDku4TFMViWdFH/view?usp=sharing', '_blank')}>Download My CV</button>
      </div>
    </section>
  );
};

export default Hero;