import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center space-x-48 max-w-7xl mx-auto">
      <Link href="/">Logo</Link>

      <ul className="flex space-x-6">
        <Link href="/about">AboutPage</Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
