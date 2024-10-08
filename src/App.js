import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePages.js';
import BuySell from './Components/Pages/BuySell.js';
import Wallet from './Components/Pages/Wallet.js';
import Layout from './Components/Layout.js';
import './styles.css';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/markets" element={<BuySell />} />
        </Routes>
        </Layout>
    </Router>
    
  );
};

export default App;
