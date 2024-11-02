// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePages';
import BuySell from './Pages/BuySell';
import Wallet from './Pages/Wallet';
import Layout from './Components/Layout';
import './styles.css';
import CoinsPage from './Pages/CoinsPage';
import SignupForm from './Pages/SignupForm';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/markets" element={<BuySell />} />
          <Route path="/coins/:coinId" element={<CoinsPage />} /> 
          <Route path="/SignupForm" element={<SignupForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
