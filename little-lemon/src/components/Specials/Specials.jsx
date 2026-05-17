import React from 'react';
import SpecialCard from './SpecialCard';
import { useNavigate } from 'react-router-dom';
import './Specials.css';
import greekSalad from '../../assets/images/greek-salad.jpg';
import bruschetta from '../../assets/images/bruschetta.jpg';
import lemonDessert from '../../assets/images/lemon-dessert.jpg';

const specials = [
    {
        id: 1,
        image: greekSalad,
        name: 'Greek Salade',
        price: '12.99',
        description: 'Lorem ipsum dolor et perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...'
    },
    {
        id: 2,
        image: bruschetta,
        name: 'Bruschetta',
        price: '5.89',
        description: 'Lorem ipsum dolor et perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...'
    },
    {
        id: 3,
        image: lemonDessert,
        name: 'Lemon Dessert',
        price: '5.00',
        description: 'Lorem ipsum dolor et perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...'
    }
];

const Specials = () => {
    const navigate = useNavigate();

    return (
        <section className="specials">
            <div className="specials-container">
                <div className="specials-header">
                    <h2 className="specials-title">Specials</h2>
                    <button className="btn-secondary"
                        onClick={() => navigate('/menu')}
                    >Online Menu</button>
                </div>
                <div className="specials-grid">
                    {specials.map(item => (
                        <SpecialCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;