import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <header className="px-4 py-3 sm:flex sm:justify-between sm:items-center border-b border-gray-500 shadow-lg">
      <Container>
        <div className="flex justify-between items-center">
          <div>lgog</div>
          <div>nav link</div>
          <div>avtar</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
