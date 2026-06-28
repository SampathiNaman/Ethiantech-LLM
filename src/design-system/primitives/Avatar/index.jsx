import React from 'react';

const sizeStyles = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
};

export default function Avatar({
  size = 'md',
  src,
  name,
  alt = '',
  className = '',
}) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 bg-[#E1E1E1] inline-flex items-center justify-center font-inter font-medium text-[#656565] ${sizeStyles[size]} ${className}`}
      title={name || alt}
    >
      {src ? (
        <img src={src} alt={alt || name || ''} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

Avatar.displayName = 'Avatar';
