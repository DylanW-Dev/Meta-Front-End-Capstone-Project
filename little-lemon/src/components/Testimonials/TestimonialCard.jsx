import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    className={star <= rating ? 'star filled' : 'star'}
                >★</span>
            ))}
            <span className="rating-number">{rating}/5</span>
        </div>
    );
};

const TestimonialCard = ({ name, rating, photo, review }) => {
    return (
        <div className="testimonial-card">
            <StarRating rating={rating} />
            <div className="testimonial-profile">
                <img src={photo} alt={name} className="profile-photo" />
                <span className="profile-name">{name}</span>
            </div>
            <p className="testimonial-review">{review}</p>
        </div>
    );
};

export default TestimonialCard;