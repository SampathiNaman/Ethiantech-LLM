import React from 'react';
import Text from '../../primitives/Text';

const TabBar = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === tab.id
              ? 'text-[#D62A91]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange?.(tab.id)}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D62A91]" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
