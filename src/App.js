// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Intro } from './Components/Pages/Intro';
import { Work } from './Components/Pages/Work';
import { Service } from './Components/Pages/Service';
import { ContactUs } from './Components/Pages/ContactUs';
import { Footer } from './Components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Adjusted padding to accommodate fixed navbar */}
        <div id="intro">
          <Intro />
        </div> 
        <div id="work">
          <Work />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
}

export default App;
