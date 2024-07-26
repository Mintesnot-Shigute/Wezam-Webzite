// src/Components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#intro" className="footer-link">Home</a>
        <a href="#work" className="footer-link">Work</a>
        <a href="#service" className="footer-link">Service</a>
        <a href="#service" className="footer-link">About</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Wezam Coffee. All rights reserved.
      </p>
    </footer>
  );
}
