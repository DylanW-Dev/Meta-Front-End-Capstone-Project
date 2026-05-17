// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Specials />
    <Testimonials />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;