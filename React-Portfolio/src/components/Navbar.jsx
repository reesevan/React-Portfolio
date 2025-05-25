import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Evan Rees</div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
            <Link to="/art-gallery" className="hover:text-blue-400 transition">Gallery</Link>
            <Link to="/resume" className="hover:text-blue-400 transition">Resume</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
