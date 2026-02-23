import logo from '../assets/Logo.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#menu">MENU</a></li>
                    <li><a href="#reservation">RESERVATION</a></li>
                    <li><a href="#order">ORDER ONLINE</a></li>
                    <li><a href="#login">LOGIN</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;