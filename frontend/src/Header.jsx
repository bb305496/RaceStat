import {Link, useNavigate} from 'react-router-dom';
import "./CSS/Header.css"

function Header({token, setToken}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setToken(null);
        navigate('/signin');
    }

    return (
        <header className="header-container">
            <div>
                <img className="header-image" src="/header-img.png" alt="Red car" />
            </div>
            <div className="header-title">RaceStat</div>
            <div><Link className="header-buttons" to="/">Home</Link></div>
            <div><Link className="header-buttons" to="/tracks">Tracks</Link></div>
            <div><Link className="header-buttons" to="/contact">Contact</Link></div>
            <div><Link className="header-buttons" to="/price-list">Price-list</Link></div>
            <div><Link className="header-buttons" to="/aboutus">About us</Link></div>

            {token ? (
                <div>
                    <Link className="header-buttons" to="/signin"
                          onClick={handleLogout}>Logout</Link>
                </div>
            ) : (
                <>
                    <div><Link className="header-buttons" to="/signin">Sign In</Link></div>
                    <div><Link className="header-buttons" to="/signup">Sign Up</Link></div>
                </>
            )}
        </header>
    );
}

export default Header;