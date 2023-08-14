import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <div className="grid grid-rows-layout h-screen">
      <Header />
      <main className="px-4 sm:px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
