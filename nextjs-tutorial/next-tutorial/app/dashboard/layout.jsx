import React from 'react';
import Header from '@/components/Header';
const LayoutRegister = ({ children }) => {
  return (
    <div className="flex flex-col mt-20 gap-20 h-screenw-full bg-red-600">
      <Header />
      {children}
      <h1>Dashboard footer</h1>
    </div>
  );
};

export default LayoutRegister;
