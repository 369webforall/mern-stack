import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="grid grid-rows-layout h-screen w-full">
      <Navbar />
      <main className="px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
