// src/Components/Pages/Work.js
import React, { useEffect, useState } from 'react';
import Project1 from '../Image/speciality_coffee.jpg'; // Adjust the image filenames and paths as needed
import Project2 from '../Image/field.jpg';
import Project3 from '../Image/comercial_coffee.jpg';
import Icon from '../Image/icon.png'; // Update this path to your icon image

function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="text-4xl font-extrabold">{count}</span>;
}

export function Work() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* What We Do Section */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-0 text-center">What We Do</h1>
      </div>

      {/* Story About Us Section */}
      <div className="w-full max-w-4xl mb-8">
        <div className="relative text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 inline-block pb-2">
            Story About Us
            <span 
              className="block w-24 h-1 bg-red-500 mt-2 mx-auto"
              style={{ 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 1)' 
              }}
            ></span>
          </h2>
        </div>
        <div>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-center p-4">
          <img src={Project1} alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="flex items-center justify-center p-4">
          <img src={Project2} alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="flex items-center justify-center p-4">
          <img src={Project3} alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </div>

      {/* Count Section */}
      <div className="w-full bg-gradient-to-b from-[#003300] to-[#9ae1a0] text-white flex justify-between items-center py-10 mt-8">
      <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
        <div className="text-center px-4">
          <CountUp end={123} duration={2000} />
          <p className="mt-2 text-m font-bold">Happy Clients</p>
        </div>
        <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
        <div className="text-center px-4">
          <CountUp end={15} duration={2000} />
          <p className="mt-2 text-m font-bold">Awards</p>
        </div>
        <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
        <div className="mx-8">
          <img src={Icon} alt="Icon" className="w-16 h-16 mx-auto" />
        </div>
        <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
        <div className="text-center px-4">
          <CountUp end={99} duration={2000} />
          <p className="mt-2 text-m font-bold">Cups of Coffee</p>
        </div>
        <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
        <div className="text-center px-4">
          <CountUp end={123} duration={2000} />
          <p className="mt-2 text-m font-bold">Members</p>
        </div>
        <div className="border-l-2 border-white h-12 mx-4"></div> {/* Vertical Line */}
      </div>
    </section>
  );
}
