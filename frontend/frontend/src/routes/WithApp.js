import React from 'react';
import AppBars from '../layouts/AppBar'
import Footer from '../layouts/Footer';

function LayoutWithHeaderFooter({ children }) {
  return (
    <>
       <AppBars/>
      {children}
      <Footer/>
    </>
  );
}

export default LayoutWithHeaderFooter;
