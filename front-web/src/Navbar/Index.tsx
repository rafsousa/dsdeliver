import './styles.css';
import { ReactComponent as LogoMoto } from './Logo_Moto.svg'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="main-navbar">
            <LogoMoto />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;