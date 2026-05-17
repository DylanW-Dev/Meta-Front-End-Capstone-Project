import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = ({ pageName }) => {
    return (
        <section className="coming-soon">
            <div className="coming-soon__card">
                <div className="coming-soon__icon">🚧</div>
                <h1 className="coming-soon__title">{pageName}</h1>
                <p className="coming-soon__text">
                    This page is currently under construction.<br />
                    Check back soon!
                </p>
                <Link to="/" className="coming-soon__btn">
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default ComingSoon;
