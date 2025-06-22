import React from 'react';

const Footer = () => (
  <footer className="pt-10 pb-8 text-center">
    <div className="text-2xl font-bold mb-4 text-[#222]">
      <span>Haawee</span><span className="text-[#3498db]">jee.</span>
    </div>
    <nav className="flex flex-col sm:flex-row  justify-center gap-7 mb-8 flex-wrap">
      <a className='text-[#222] font-serif text-[1.05rem] no-underline font-normal transition-colors duration-200 hover:text-[#3498db]' href="#home">Home</a>
      <a className='text-[#222] font-serif text-[1.05rem] no-underline font-normal transition-colors duration-200 hover:text-[#3498db]' href="#experience">Experience</a>
      <a className='text-[#222] font-serif text-[1.05rem] no-underline font-normal transition-colors duration-200 hover:text-[#3498db]' href="#projects">Projects</a>
      <a className='text-[#222] font-serif text-[1.05rem] no-underline font-normal transition-colors duration-200 hover:text-[#3498db]' href="#contact">Contact Me</a>
    </nav>
  </footer>
);

export default Footer;