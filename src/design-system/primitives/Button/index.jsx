import React from 'react';

const variantStyles = {
  primary: 'bg-[#D62A91] text-white',
  secondary: 'bg-white text-[#404040] border border-[#6B7280] border-opacity-50',
  outline: 'bg-transparent text-[#D62A91] border border-[#D62A91]',
  ghost: 'bg-transparent text-[#D62A91]',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
};

const stateStyles = {
  default: '',
  hover: '',
  pressed: '',
  disabled: 'opacity-50 cursor-not-allowed',
  loading: 'cursor-wait',
};

const shapeStyles = {
  rounded: 'rounded-[5px]',
  pill: 'rounded-full',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  state: buttonState = 'default',
  shape = 'rounded',
  icon,
  loading = false,
  disabled = false,
  children,
  onClick,
  className = '',
}) {
  const isDisabled = disabled || loading || buttonState === 'disabled';
  const effectiveState = loading ? 'loading' : isDisabled ? 'disabled' : buttonState;

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-outfit font-semibold transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${stateStyles[effectiveState]} ${shapeStyles[shape]} ${className}`}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
}

Button.displayName = 'Button';
