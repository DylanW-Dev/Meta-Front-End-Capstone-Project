import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';
import angelo from '../../assets/images/angelo.jpg';
import maria from '../../assets/images/maria.jpg';
import grace from '../../assets/images/grace.jpg';
import mish from '../../assets/images/mish.jpg';

const testimonials = [
    { id: 1, name: 'Angelo', rating: 4, photo: angelo, review: 'Delicious and fresh!' },
    { id: 2, name: 'Maria', rating: 4, photo: maria, review: 'Great service and awesome food.' },
    { id: 3, name: 'Grace', rating: 4, photo: grace, review: 'Always happy to eat there.' },
    { id: 4, name: 'Mish', rating: 4, photo: mish, review: 'The lemon dessert is worth the hype' }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <h2 className="testimonials-title">Testimonials</h2>
                <div className="testimonials-grid">
                    {testimonials.map(t => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;