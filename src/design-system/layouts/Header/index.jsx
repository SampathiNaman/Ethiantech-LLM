import React from 'react';
import Container from '../Container';

const Header = ({ children, className = '' }) => {
  return (
    <header className={`w-full bg-white ${className}`}>
      <Container>
        {children}
      </Container>
    </header>
  );
};

export default Header;
