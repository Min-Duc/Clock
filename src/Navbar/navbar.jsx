import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AnalogClock">Analog Clock</Link>
                </li>
                <li>
                    <Link to="/MainClock">Main Clock</Link>
                </li>
                <li>
                    <Link to="/StopWatch">Stopwatch</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
