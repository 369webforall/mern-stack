'use client';

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { status, data: session } = useSession();
  console.log(status);
  return (
    <nav className="h-16 flex items-center space-x-48 max-w-7xl mx-auto">
      <Link href="/">Logo</Link>

      <ul className="flex space-x-6">
        <Link href="/about">AboutPage</Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
        <Link href="/admin">Admin</Link>
        {status === 'unauthenticated' && (
          <Link href="/api/auth/signin">Login</Link>
        )}
        {status === 'authenticated' && <div>{session.user?.name}</div>}
        {status === 'authenticated' && (
          <Link href="/api/auth/signout">signout</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
