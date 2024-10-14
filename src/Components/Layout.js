// Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Ensure you have a Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* Renders the page content */}
      <Footer />
    </>
  );
};

export default Layout;
