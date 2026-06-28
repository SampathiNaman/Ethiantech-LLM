import React from 'react';
import Input from '../../primitives/Input/index.jsx';
import Button from '../../primitives/Button/index.jsx';
import Icon from '../../primitives/Icon/index.jsx';

export default function SearchBar({
  placeholder = 'Search for courses...',
  value,
  onChange,
  onSearch,
  className = '',
}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1"
        icon={<Icon name="search" size={18} />}
      />
      <Button variant="primary" size="md" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}

SearchBar.displayName = 'SearchBar';
