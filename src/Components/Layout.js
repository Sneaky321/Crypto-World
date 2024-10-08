// Layout.jsx
import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      <main>{children}</main> {/* Renders the page content*/}
      <Footer />
    </>
  );
};

export default Layout;
