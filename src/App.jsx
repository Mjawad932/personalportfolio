import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer'; 
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Research from './pages/Research';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Experience from './pages/Experience';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Aboutme />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
