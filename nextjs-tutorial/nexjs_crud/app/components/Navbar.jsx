import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-slate-700 text-white p-4">
      <h1 className="font-semibold text-3xl">
        <Link href="/">Topics</Link>
      </h1>
      <Link
        href="/addTopic"
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        AddTopics
      </Link>
    </div>
  );
};

export default Navbar;
