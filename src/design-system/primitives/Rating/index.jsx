import React from 'react';

function Star({ filled, half, id }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
      <defs>
        <clipPath id={`half-${id}`}>
          <rect x="0" y="0" width="8" height="16" />
        </clipPath>
      </defs>
      <path
        d="M8 1.5l1.77 3.58 3.95.58-2.86 2.78.68 3.92L8 10.92l-3.54 1.86.68-3.92L2.28 5.66l3.95-.58L8 1.5z"
        fill={filled ? '#FF532E' : '#7E7E7E'}
        opacity={half && !filled ? 0.4 : 1}
      />
      {half && (
        <path
          d="M8 1.5l1.77 3.58 3.95.58-2.86 2.78.68 3.92L8 10.92l-3.54 1.86.68-3.92L2.28 5.66l3.95-.58L8 1.5z"
          fill="#FF532E"
          clipPath={`url(#half-${id})`}
        />
      )}
    </svg>
  );
}

export default function Rating({
  value = 0,
  max = 5,
  showText = false,
  className = '',
}) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const filled = value >= i;
    const half = !filled && value >= i - 0.5;
    stars.push(<Star key={i} id={`rating-star-${i}`} filled={filled || half} half={half && !filled} />);
  }

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} role="img" aria-label={`${value} out of ${max} stars`}>
      {stars}
      {showText && (
        <span className="ml-1 font-inter text-sm text-[#404040]">{value.toFixed(1)}</span>
      )}
    </div>
  );
}

Rating.displayName = 'Rating';
