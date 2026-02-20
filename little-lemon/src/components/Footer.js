import FooterImg from '../assets/restauranfood.jpg';

function Footer() {
    return (
        <>
            <img src={FooterImg} alt="Mario & Adrian" style={{ width: '150px', height: '250px' }} />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
            </ul>
            <p>&copy; 2026 Little Lemon. All rights reserved.</p>
        </>
    );
}

export default Footer;