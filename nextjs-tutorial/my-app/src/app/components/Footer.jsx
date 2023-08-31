import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4 text-center text-lg text-white">
      &copy; {new Date().getFullYear()} CopyRight. Site belongs to my-blog
    </footer>
  );
};

export default Footer;
