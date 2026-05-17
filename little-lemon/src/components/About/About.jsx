import React from 'react';
import './About.css';
import ownerPhoto from '../../assets/images/owner.jpg';
import restaurantPhoto from '../../assets/images/restaurant.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-content">
                    <h1 className="about-title">Little Lemon</h1>
                    <h2 className="about-subtitle">Chicago</h2>
                    <p className="about-description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."
                    </p>
                </div>
                <div className="about-images">
                    <img
                        src={restaurantPhoto}
                        alt="Restaurant Interior"
                        className="about-img about-img-back"
                    />
                    <img
                        src={ownerPhoto}
                        alt="Restaurant Owner"
                        className="about-img about-img-front"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;