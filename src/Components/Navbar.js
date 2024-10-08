// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import '../styles.css'
const Navbar = () => {
  return (
   
      // <Toolbar>
      //   <Typography variant="h6" style={{ flexGrow: 1 }}>
      //     Crypto App
      //   </Typography>
      //   <Button color="inherit" component={Link} to="/">Home</Button>
      //   <Button color="inherit" component={Link} to="/wallet">Wallet</Button>
      //   <Button color="inherit" component={Link} to="/markets">Markets</Button>
      // </Toolbar>
      <nav class="navbar">
  <div class="logo">Crypto</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Wallet</a></li>
    <li><a href="#">BuySell</a></li>
  </ul>
</nav>    
  );
};

export default Navbar;
