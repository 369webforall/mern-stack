import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="grid grid-rows-layout w-full h-screen">
      <Navbar />
      <main className="px-8 py-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
