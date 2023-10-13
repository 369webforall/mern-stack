import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside className="w-[400px] bg-red-300 h-screen">side navbar</aside>

      <div className="w-full h-screen bg-orange-200">{children}</div>
    </div>
  );
};

export default AdminLayout;
