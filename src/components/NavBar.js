import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/vendor-profile">User</Link>
        </nav>
    );
};
export default NavBar;
