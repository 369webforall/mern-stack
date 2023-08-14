import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center text-lg px-2 sm:px-8 py-4">
      <p>&copy; {new Date().getFullYear()} copyright myblog</p>
    </footer>
  );
};

export default Footer;
