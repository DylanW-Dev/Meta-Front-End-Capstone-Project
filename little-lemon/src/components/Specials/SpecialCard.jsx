import React from 'react';

const SpecialCard = ({ image, name, price, description }) => {
    return (
        <div className="special-card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-body">
                <div className="card-header">
                    <span className="card-name">{name}</span>
                    <span className="card-price">{price}$</span>
                </div>
                <p className="card-description">{description}</p>
                <a href="/order" className="card-order-link">
                    Order a delivery <span>→</span>
                </a>
            </div>
        </div>
    );
};

export default SpecialCard;