import React from 'react';
import {  useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return `relative text-white font-medium p-2 rounded transition duration-300 ease-in-out
      before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 
      before:transition-all before:duration-300 
      ${location.pathname === path ? 'before:w-full text-yellow-400' : 'hover:before:w-full hover:text-yellow-400 hover:bg-yellow-200 hover:bg-opacity-10'}`;
  };

  return (
    <>
      <nav className="bg-green-800 py-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* Text logo */}
            <a href="/#intro" class="text-2xl sm:text-4xl font-bold text-white transition-colors duration-300 ease-in-out font-artegra-slab">
  wezam
</a>

          </div>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>
              <a href="#intro" className={getLinkClasses('/')}>Home</a>
            </li>
            
              <li>
              <a href="#work" className={getLinkClasses('/work')}>Work</a>
            </li>
            <li>
              <a href="#service" className={getLinkClasses('/service')}>Service</a>
            </li>
          
            <li>
              <a href="#service" className={getLinkClasses('/about')}>About</a>
            </li>
            <li>
              <a href="#contact" className={getLinkClasses('/contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-16"></div> {/* Ensure content starts below the fixed navbar */}
    </>
  );
}

export default Navbar;
