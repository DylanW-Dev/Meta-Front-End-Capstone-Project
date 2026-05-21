// src/components/Booking/BookingForm.jsx
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        switch (name) {
            case 'date':
                if (!value) return 'Please select a date.';
                if (new Date(value) < new Date().setHours(0, 0, 0, 0))
                    return 'Date cannot be in the past.';
                return '';
            case 'time':
                if (!value) return 'Please select a time.';
                return '';
            case 'guests':
                if (!value || value < 1) return 'At least 1 guest is required.';
                if (value > 10) return 'Maximum 10 guests allowed.';
                return '';
            default:
                return '';
        }
    };

    const isFormValid = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.date &&
            formData.time &&
            formData.guests >= 1 &&
            formData.guests <= 10 &&
            Object.values(errors).every(e => e === '')
        );
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'date') {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
        }

        const error = validate(id, value);
        setErrors(prev => ({ ...prev, [id]: error }));

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation pass
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            newErrors[key] = validate(key, formData[key]);
        });
        setErrors(newErrors);

        if (Object.values(newErrors).every(e => e === '')) {
            submitForm(formData);
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Reservation Form" noValidate>

            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                aria-required="true"
            />

            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                aria-required="true"
            />

            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                aria-required="true"
                aria-describedby="date-error"
            />
            {errors.date && <span id="date-error" className="error">{errors.date}</span>}

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="time-error"
            >
                <option value="">-- Select a time --</option>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {errors.time && <span id="time-error" className="error">{errors.time}</span>}

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
                aria-describedby="guests-error"
            />
            {errors.guests && <span id="guests-error" className="error">{errors.guests}</span>}

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
                disabled={!isFormValid()}
            >
                Reserve a Table
            </button>

        </form>
    );
};

export default BookingForm;
