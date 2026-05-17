import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../assets/images/hero-food.jpg';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-subtitle">Chicago</h2>
                    <p className="hero-description">
                        We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <button
                        className="btn-primary"
                        onClick={() => navigate('/reservation')}
                    >
                        Reserve a Table
                    </button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Mediterranean Food" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
