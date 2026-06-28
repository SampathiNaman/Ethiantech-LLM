import React from 'react';

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)]',
  bordered: 'bg-white border border-[#E1E1E1]',
  dark: 'bg-[#292940] text-white',
  light: 'bg-[#F7F9FD]',
};

export default function Surface({
  variant = 'default',
  children,
  className = '',
}) {
  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

Surface.displayName = 'Surface';
