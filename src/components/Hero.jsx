import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero-intro">Hello, I'm</h2>
      <h1 className="hero-name">Hendrawan Wibowo</h1>
      <h3 className="hero-role">
        <Typewriter
          options={{
            strings: [
              'Software Engineer',
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
        <button className="btn btn-primary">Hire Me</button>
        <button className="btn btn-primary">Download My CV</button>
      </div>
    </section>
  );
};

export default Hero;