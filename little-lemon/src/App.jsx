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
import ComingSoon from './components/ComingSoon/ComingSoon';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Specials />
    <Testimonials />
    <About />
  </>
);

const getBookedTimes = (date) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  return bookings
    .filter(b => b.date === date)
    .map(b => b.time);
};

const initializeTimes = () => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const allTimes = typeof window.fetchAPI === 'function'
    ? window.fetchAPI(today)
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const booked = getBookedTimes(todayStr);
  return allTimes.filter(t => !booked.includes(t));
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const allTimes = typeof window.fetchAPI === 'function'
        ? window.fetchAPI(new Date(action.payload))
        : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

      const booked = getBookedTimes(action.payload);
      return allTimes.filter(t => !booked.includes(t));
    }
    default:
      return state;
  }
};

const AppRoutes = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const result = window.submitAPI(formData);
      if (result) {
        const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
        existing.push(formData);
        localStorage.setItem('bookings', JSON.stringify(existing));
        dispatch({ type: 'UPDATE_TIMES', payload: formData.date });
        navigate('/confirmed');
      }
    } else {
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      existing.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existing));
      dispatch({ type: 'UPDATE_TIMES', payload: formData.date });
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
      <Route path="/about" element={<ComingSoon pageName="About" />} />
      <Route path="/menu" element={<ComingSoon pageName="Menu" />} />
      <Route path="/order" element={<ComingSoon pageName="Order Online" />} />
      <Route path="/login" element={<ComingSoon pageName="Login" />} />
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
