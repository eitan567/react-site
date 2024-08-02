import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const Layout = ({ children }) => {
  return(
    <div className="font-assistant text-gray-800 flex flex-col min-h-screen" dir="rtl">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
