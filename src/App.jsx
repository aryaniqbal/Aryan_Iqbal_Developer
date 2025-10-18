// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import About from "../sections/AboutMe"

// Import global styles
import './global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes like /about, etc. */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;