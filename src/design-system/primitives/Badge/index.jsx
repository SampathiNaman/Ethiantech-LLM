import React from 'react';

const variantStyles = {
  primary: 'bg-[#D62A91] text-white',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
  neutral: 'bg-gray-100 text-[#656565]',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[12px]',
  md: 'px-2.5 py-1 text-[13px]',
};

export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}) {
  return (
    <span
      className={`inline-flex items-center font-inter font-medium rounded ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';
