import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="flex justify-between items-center lg:container mx-auto">
        <h1 className="text-4xl text-orange-500 font-semibold">
          Blog <span className="text-orange-900">Logo</span>
        </h1>
        <nav className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">AboutPage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/post">AddPost</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
