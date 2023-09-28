import React from 'react';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <div className="bg-red-600  px-12">
      <ul className="flex gap-4 text-white">
        <li className=" hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2">
          <Link href="/" className="py-4 px-8 block text-lg">
            Home
          </Link>
        </li>
        <li className=" hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2">
          <Link href="/" className="py-4 px-8 block text-lg">
            Contact
          </Link>
        </li>
        <li className="hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2">
          <Link href="/" className="py-4 px-8 block text-lg">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
