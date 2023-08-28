import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-600 text-white text-lg flex justify-between items-center py-3 px-8">
      <h1>React-Auth</h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
