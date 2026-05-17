import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';
import './Footer.css';
import chefPrepping from '../../assets/images/chef-prepping.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-chef">
                    <img src={chefPrepping} alt="Chef Prepping" className="footer-chef-img" />
                </div>

                <div className="footer-nav">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>263 Lemon Street, Chicago</li>
                        <li>+1 (312) 555-0199</li>
                        <li>hello@littlelemon.com</li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Social Media Links</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://tripadvisor.com" aria-label="TripAdvisor">
                            <SiTripadvisor />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
