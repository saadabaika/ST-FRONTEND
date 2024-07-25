// src/components/Navbar.jsx
import React from 'react';
import '../Navbar.css'; // Assurez-vous que le chemin est correct

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/stlogo.png" alt="Company Logo" className="navbar-logo" />
            <div className="navbar-title"></div>
        </nav>
    );
};

export default Navbar;
