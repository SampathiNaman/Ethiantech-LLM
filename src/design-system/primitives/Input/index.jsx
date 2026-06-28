import React from 'react';

const stateStyles = {
  default: 'border-[#6B7280] border-opacity-20',
  focus: 'border-[#D62A91] border-opacity-50 ring-1 ring-[#D62A91] ring-opacity-20',
  error: 'border-[#FF4B4B] ring-1 ring-[#FF4B4B] ring-opacity-20',
  disabled: 'border-[#E1E1E1] bg-gray-50 cursor-not-allowed',
  filled: 'border-[#6B7280] border-opacity-40',
};

export default function Input({
  label,
  placeholder = '',
  error,
  helperText,
  type = 'text',
  value,
  onChange,
  disabled = false,
  className = '',
  icon,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const inputState = disabled ? 'disabled' : error ? 'error' : focused ? 'focus' : value ? 'filled' : 'default';

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="font-inter text-sm font-medium text-[#404040]">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7A7B7D]">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full h-[54px] px-4 ${icon ? 'pl-10' : ''} bg-white border rounded-[5px] font-inter text-[15px] text-[#404040] placeholder:text-[#A9A9A9] outline-none transition-colors ${stateStyles[inputState]}`}
          {...props}
        />
      </div>
      {error && <p className="font-inter text-xs text-[#FF4B4B]">{error}</p>}
      {helperText && !error && <p className="font-inter text-xs text-[#656565]">{helperText}</p>}
    </div>
  );
}

Input.displayName = 'Input';
