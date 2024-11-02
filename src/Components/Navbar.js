import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your styles are imported

// Import the image from assets
import logoImage from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoImage} alt="Crypto Hunter Logo" style={{ height: '40px', marginRight: '8px' }} />
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '600' }}>
          Crypto Hunter
        </span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Wallet">Wallet</Link></li>
        <li><Link to="/markets">Buy/Sell</Link></li>
      </ul>
      <Link to="/SignupForm" className="login-button">Login</Link>
    </nav>
  );
};

export default Navbar;
