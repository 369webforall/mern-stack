import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-500 w-full h-screen flex gap-4">
        <div className="bg-orange-300 w-[200px] h-full">Left</div>
        <div className="flex-1">{children}</div>
        <div className="bg-red-400 w-[200px] h-full">Right</div>
      </div>
    </div>
  );
};

export default Layout;
