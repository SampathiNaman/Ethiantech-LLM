import React from 'react';
import Text from '../../primitives/Text';
import Button from '../../primitives/Button';

const SearchFilterBar = ({ placeholder, resultCount, sortOptions = [], onSearch, onSortChange }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6">
      <form onSubmit={handleSubmit} className="flex-1 flex gap-2 w-full">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder || 'Search courses...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#D62A91] focus:border-[#D62A91]"
          />
        </div>
        <Button type="submit" variant="primary" size="md">Search</Button>
      </form>
      <div className="flex items-center gap-3 w-full md:w-auto">
        {resultCount !== undefined && (
          <Text variant="body-sm" className="text-gray-500 whitespace-nowrap">
            Showing {resultCount} results
          </Text>
        )}
        {sortOptions.length > 0 && (
          <select
            onChange={(e) => onSortChange?.(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D62A91]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
