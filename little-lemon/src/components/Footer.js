import logo from "../assets/restauranfood.jpg"; // replace with your logo path (or remove if you want the placeholder)

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon" id="footer-logo" />
                </div>footer-logo
                <div className="footer-col">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservation">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Social Media Links</h3>
                    <div className="social-icons">
                        <a className="icon" href="#ig" aria-label="Instagram" />
                        <a className="icon" href="#fb" aria-label="Facebook" />
                        <a className="icon" href="#tw" aria-label="Twitter" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;