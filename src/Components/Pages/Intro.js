// src/Components/Pages/Intro.js
import React from 'react';
import WezamBackground from '../Image/Wezam.jpg'; // Adjust the image filename and path as needed
import { useLocation } from 'react-router-dom';

export function Intro() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return `relative text-white font-medium p-2 rounded transition duration-300 ease-in-out transform hover:scale-110
      before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 
      before:transition-all before:duration-300 
      ${location.pathname === path ? 'before:w-full text-yellow-400' : 'hover:before:w-full hover:text-yellow-400 hover:bg-yellow-200 hover:bg-opacity-10'}`;
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${WezamBackground})`, marginTop: '-64px' }} // Adjust the marginTop based on your navbar height
    >
      <div className="absolute bottom-36 w-full text-center">
        <div className="w-24 h-0.5 bg-white mx-auto mb-10"></div> {/* Horizontal line */}
        <a
          href="#learn-more"
          className="text-white border border-white px-4 py-2 rounded transition transform hover:scale-110 hover:bg-white hover:text-blue-700"
        >
          Learn More
        </a>
      </div>

      <div className="absolute bottom-10 w-full text-center">
        <div className="inline-block mx-8">
          <div className="w-20 h-0.5 bg-white mx-auto mb-2"></div> {/* Horizontal line */}
          <a href="#intro" className={getLinkClasses('/')}>01 Intro</a>
        </div>
        <div className="inline-block mx-8">
          <div className="w-20 h-0.5 bg-white mx-auto mb-2"></div> {/* Horizontal line */}
          <a href="#work" className={getLinkClasses('work')}>02 Work</a>
        </div>
        <div className="inline-block mx-8">
          <div className="w-20 h-0.5 bg-white mx-auto mb-2"></div> {/* Horizontal line */}
          <a href="#service" className={getLinkClasses('/service')}>03 About</a>
        </div>
        <div className="inline-block mx-8">
          <div className="w-20 h-0.5 bg-white mx-auto mb-2"></div> {/* Horizontal line */}
          <a href="#contact" className={getLinkClasses('/contactus')}>04 Contacts</a>
        </div>
      </div>
    </section>
  );
}
