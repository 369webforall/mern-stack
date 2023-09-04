'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
const Html = () => {
  const pathname = usePathname();

  console.log(pathname);
  return <div>Curretnt Route: {pathname}</div>;
};

export default Html;
