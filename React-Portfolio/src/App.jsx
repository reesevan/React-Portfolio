import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ArtGallery from './components/ArtGallery';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <Router>
        <Navbar />
        <main className="px-4 py-10 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/art-gallery" element={<ArtGallery />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;


