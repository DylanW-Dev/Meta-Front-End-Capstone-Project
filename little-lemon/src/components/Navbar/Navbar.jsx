import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to="/reservation" onClick={() => setIsOpen(false)}>Reservation</Link>
                    <Link to="/order" onClick={() => setIsOpen(false)}>Order Online</Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </div>

                {/* Hamburger for mobile */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
