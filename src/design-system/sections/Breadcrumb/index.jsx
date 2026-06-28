import React from 'react';
import Text from '../../primitives/Text';

const Breadcrumb = ({ items = [], className = '' }) => {
  if (!items.length) return null;
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Text variant="meta" className="text-gray-400">/</Text>}
          {item.href ? (
            <a href={item.href} className="text-gray-400 hover:text-[#292940] transition-colors">
              {item.label}
            </a>
          ) : (
            <Text variant="body-sm" className="text-[#292940] font-medium">{item.label}</Text>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
