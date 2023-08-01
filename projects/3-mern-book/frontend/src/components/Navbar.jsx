import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  px-12 py-2 bg-[#222] text-white ">
      <h1 className="text-4xl font-semibold">Book Store</h1>
      <div className="flex gap-4 text-2xl font-medium">
        <Link to="/">Home</Link>
        <Link to="/all-books">All_Books</Link>
        <Link to="/add-book">Add_Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
