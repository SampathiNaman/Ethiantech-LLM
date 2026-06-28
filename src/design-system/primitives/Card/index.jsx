import React from 'react';

const variantStyles = {
  default: 'bg-white border border-[#E1E1E1]',
  elevated: 'bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)]',
  bordered: 'bg-white border-2 border-[#D62A91]',
  interactive: 'bg-white border border-[#E1E1E1] cursor-pointer hover:shadow-[0px_4px_15px_rgba(0,0,0,0.1)] transition-shadow',
};

export default function Card({
  variant = 'default',
  children,
  className = '',
  onClick,
}) {
  return (
    <div
      className={`rounded-[8px] overflow-hidden ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

Card. Header = function CardHeader({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

Card.Body = function CardBody({ children, className = '' }) {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }) {
  return <div className={`p-4 border-t border-[#E1E1E1] ${className}`}>{children}</div>;
};

Card.displayName = 'Card';
Card.Header.displayName = 'Card.Header';
Card.Body.displayName = 'Card.Body';
Card.Footer.displayName = 'Card.Footer';
