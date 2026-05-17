import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Specials />
    <Testimonials />
    <About />
  </>
);

const initializeTimes = () => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};

// Separate inner component so useNavigate works inside Router
const AppRoutes = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const result = window.submitAPI(formData);
      if (result) {
        // Save to localStorage
        const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
        existing.push(formData);
        localStorage.setItem('bookings', JSON.stringify(existing));

        navigate('/confirmed');
      }
    } else {
      // Fallback if API not available
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      existing.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existing));

      navigate('/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/reservation"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
