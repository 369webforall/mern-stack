import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-700 text-white px-8 py-2">
      <Link to="/">MERN APP</Link>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-post">New Post</Link>
        </li>
        <li>
          <Link to="/all-post">All Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
