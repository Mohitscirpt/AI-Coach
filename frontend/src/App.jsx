import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Footer from './components/Footer';
import ResumeSection from './components/ResumeSection';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Promotions />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<ResumeSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
