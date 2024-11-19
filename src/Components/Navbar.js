import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your styles are imported
import { AccountBalanceWalletOutlined } from '@mui/icons-material';
// Import the image from assets
import logoImage from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
      <AccountBalanceWalletOutlined style={{ fontSize: "36px", color: "#FFC107" }} />
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '600', color: 'white', }}>
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
