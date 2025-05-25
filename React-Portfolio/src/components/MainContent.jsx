import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
// Import other pages as needed

const MainContent = () => {
  return (
    <main className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Add more routes here */}
      </Routes>
    </main>
  );
};

export default MainContent;
