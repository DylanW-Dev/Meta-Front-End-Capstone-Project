import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = ({ availableTimes, dispatch }) => {
    return (
        <section className="booking-page">
            <div className="booking-container">
                <h1>Reserve a Table</h1>
                <p>Fill in the details below to make your reservation.</p>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                />
            </div>
        </section>
    );
};

export default BookingPage;
