// src/components/Booking/BookingForm.jsx
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        // When date changes, dispatch to update available times
        if (id === 'date') {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
        }

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Reservation Form">

            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                aria-required="true"
            />

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-required="true"
            >
                <option value="">-- Select a time --</option>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
                aria-required="true"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                aria-required="false"
            >
                <option value="">-- Select occasion --</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>

            <button
                type="submit"
                className="btn-primary"
                aria-label="Submit reservation"
            >
                Reserve a Table
            </button>

        </form>
    );
};

export default BookingForm;
