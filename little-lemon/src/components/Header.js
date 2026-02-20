import Logo from '../assets/Logo.svg';

function Header() {
    return (
        <>
            <img src={Logo} alt="Little Lemon Logo" className="logo" />
        </>
    );
}

export default Header;