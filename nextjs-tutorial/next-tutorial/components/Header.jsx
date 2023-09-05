'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-purple-600 text-white px-10 py-2 flex items-center justify-between">
      <h1>Logo</h1>
      <nav className="flex gap-4 text-center">
        <Link href="/">Home</Link>
        <Link href="/html">HTML</Link>
        <Link href="/css">CSS</Link>
        <Link href="/javascript">JavaScript</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/todos">Todos</Link>
      </nav>
    </header>
  );
};

export default Header;
