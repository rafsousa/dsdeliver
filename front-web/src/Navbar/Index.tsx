import './styles.css';
import { ReactComponent as LogoMoto } from './Logo_Moto.svg'
function Navbar() {
    return (
        <nav className="main-navbar">
            <LogoMoto />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;