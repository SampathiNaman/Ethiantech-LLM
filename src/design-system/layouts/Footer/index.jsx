import React from 'react';
import Container from '../Container';

const Footer = ({ children, className = '' }) => {
  return (
    <footer className={`w-full bg-[#292940] ${className}`}>
      <Container>
        {children}
      </Container>
    </footer>
  );
};

export default Footer;
