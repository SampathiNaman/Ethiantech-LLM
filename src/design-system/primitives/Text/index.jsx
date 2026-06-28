import React from 'react';

const variantTags = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  sectionHeading: 'h3',
  cardTitle: 'h3',
  body: 'p',
  bodySm: 'p',
  caption: 'span',
  label: 'span',
  button: 'span',
  meta: 'span',
};

const variantStyles = {
  display: 'font-outfit font-bold text-[2.5rem] leading-tight',
  h1: 'font-outfit font-bold text-[2.125rem] leading-tight',
  h2: 'font-outfit font-semibold text-[1.5rem] leading-snug',
  h3: 'font-outfit font-semibold text-[1.25rem] leading-snug',
  h4: 'font-outfit font-semibold text-[1.125rem] leading-snug',
  sectionHeading: 'font-inter font-semibold text-sm leading-snug tracking-wide',
  cardTitle: 'font-outfit font-semibold text-base leading-snug',
  body: 'font-inter font-normal text-[15px] leading-relaxed',
  bodySm: 'font-inter font-normal text-sm leading-relaxed',
  caption: 'font-inter font-normal text-[13px] leading-relaxed',
  label: 'font-inter font-medium text-sm leading-snug',
  button: 'font-outfit font-semibold text-[15px] leading-none tracking-wide',
  meta: 'font-inter font-normal text-[12px] leading-snug',
};

export default function Text({
  variant = 'body',
  align,
  children,
  className = '',
}) {
  const Tag = variantTags[variant] || 'p';
  const alignClass = align ? `text-${align}` : '';

  return (
    <Tag className={`${variantStyles[variant]} ${alignClass} text-[#404040] ${className}`}>
      {children}
    </Tag>
  );
}

Text.displayName = 'Text';
