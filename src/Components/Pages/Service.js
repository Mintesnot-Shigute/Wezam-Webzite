// src/Components/Pages/Service.js
import React from 'react';
import Project1 from '../Image/speciality_coffee.jpg'; // Adjust the image filenames and paths as needed
import Project2 from '../Image/comercial_coffee.jpg';
import Project3 from '../Image/value_added.jpg';

export function Service() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* What We Do Section */}
      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-0 text-center transform transition-transform duration-300 hover:translate-y-1 hover:text-red-500">
          Service
        </h1>
      </div>

      {/* What We Do Section */}
      <div className="w-full flex flex-col items-center">
        <div className="relative text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 inline-block pb-2 transform transition-transform duration-300 hover:translate-y-1 hover:text-red-500">
            What We Do
            <span
              className="block w-24 h-1 bg-red-500 mt-2 mx-auto"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 1)' }}
            ></span>
          </h2>
        </div>
        
        {/* Service Cards */}
        <div className="flex flex-col gap-12 w-[80%] bg-white">
          {/* Service Card 1 */}
          <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg gap-8 transform transition-transform duration-300 hover:translate-y-1">
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src={Project1}
                alt="Service 1"
                className="w-full h-80 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-grow md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 transform transition-transform duration-300 hover:translate-y-1 hover:text-red-500">
                Speciality coffee
              </h3>
              <div className="w-40 h-1 bg-red-500 mb-4"></div> {/* Red line */}
              <p className="text-gray-500 text-justify leading-relaxed transform transition-transform duration-300 hover:translate-y-1">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col md:flex-row-reverse bg-white p-6 rounded-lg shadow-lg gap-8 transform transition-transform duration-300 hover:translate-y-1">
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src={Project2}
                alt="Service 2"
                className="w-full h-80 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-grow md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 transform transition-transform duration-300 hover:translate-y-1 hover:text-red-500">
                Commercial coffee
              </h3>
              <div className="w-40 h-1 bg-red-500 mb-4"></div> {/* Red line */}
              <p className="text-gray-500 text-justify leading-relaxed transform transition-transform duration-300 hover:translate-y-1">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg gap-8 transform transition-transform duration-300 hover:translate-y-1">
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src={Project3}
                alt="Service 3"
                className="w-full h-80 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-grow md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 transform transition-transform duration-300 hover:translate-y-1 hover:text-red-500">
                Value-added services
              </h3>
              <div className="w-40 h-1 bg-red-500 mb-4"></div> {/* Red line */}
              <p className="text-gray-500 text-justify leading-relaxed transform transition-transform duration-300 hover:translate-y-1">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Duis vehicula ex in felis posuere, ac facilisis risus tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
