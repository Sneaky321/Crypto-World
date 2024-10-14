// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your styles are imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Crypto</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Wallet">Wallet</Link></li>
        <li><Link to="/markets">Buy/Sell</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
