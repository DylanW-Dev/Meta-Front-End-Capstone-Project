import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
    return (
        <section className="confirmed-booking">
            <div className="confirmed-booking__card">

                {/* Icon */}
                <div className="confirmed-booking__icon">✅</div>

                {/* Heading */}
                <h1 className="confirmed-booking__title">Booking Confirmed!</h1>
                <p className="confirmed-booking__subtitle">
                    Thank you! Your table has been successfully reserved at{' '}
                    <span className="confirmed-booking__brand">Little Lemon</span> 🍋
                </p>

                {/* Divider */}
                <hr className="confirmed-booking__divider" />

                {/* Actions */}
                <div className="confirmed-booking__actions">
                    <Link to="/" className="btn btn--secondary">
                        Back to Home
                    </Link>
                    <Link to="/reservation" className="btn btn--primary">
                        Make New Booking
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ConfirmedBooking;
