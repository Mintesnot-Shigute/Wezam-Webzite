import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import MapImage from '../Image/speciality_coffee.jpg'; // Adjust the image filename and path as needed

export function ContactUs() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 ">
      {/* Main Content Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 mt-12">
        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-green-700 mb-4">CONTACT US</h2>

          {/* Contact Details Cards */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <FaPhone className="text-green-500 text-6xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Phone Number</h3>
              <p className="text-gray-700">+251 116 634 401</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-500 text-6xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
            <FaEnvelope className="text-green-500 text-6xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-700">info@wezam.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <div className="w-full max-w-4xl mb-8">
            <h1 className="text-4xl font-bold text-green-700 mb-4">SEND MESSAGE</h1>
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Comment or Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-18 px-6 py-3 bg-blue-500 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
{/* Map Section */}
<div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg relative mt-36 mb-36">
  <img
    src={MapImage}
    alt="Map Background"
    className="absolute inset-0 object-cover w-full h-full opacity-30 rounded-lg"
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <a
      href="https://www.google.com/maps/place/Dasset+Building/@8.9909779,38.7916002,17z/data=!3m1!4b1!4m6!3m5!1s0x164b84e3dece8e99:0xf406ae3387722a80!8m2!3d8.9909726!4d38.7941751!16s%2Fg%2F11hb58cx05?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-green-700 font-semibold text-lg mb-4"
    >
      <FaMapMarkerAlt className="text-green-700 text-4xl mb-2" /> {/* Icon with margin */}
      OPEN MAP
    </a>
    <div className="w-40 h-1 bg-green-700 mt-4"></div> {/* Green line */}
  </div>
</div>

    </section>
  );
}
