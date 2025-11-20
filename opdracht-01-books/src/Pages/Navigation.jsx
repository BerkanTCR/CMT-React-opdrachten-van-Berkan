import { Link, Outlet } from 'react-router-dom';


const Nagivation = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">Over Ons</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Nagivation;