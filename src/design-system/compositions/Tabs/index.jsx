import React from 'react';
import Surface from '../../primitives/Surface/index.jsx';
import Text from '../../primitives/Text/index.jsx';

export default function Tabs({
  tabs = [],
  activeTab = 0,
  onChange,
  className = '',
}) {
  return (
    <div className={className}>
      <Surface variant="bordered" className="flex rounded-t-[8px] overflow-hidden">
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={tab.label || index}
              onClick={() => onChange?.(index)}
              className={`flex-1 h-[49px] px-4 flex items-center justify-center font-inter text-sm font-medium transition-colors ${
                isActive
                  ? 'text-[#D62A91] border-b-2 border-[#D62A91] bg-white'
                  : 'text-[#656565] border-b border-[#E3E3E3] bg-white hover:text-[#404040]'
              }`}
              role="tab"
              aria-selected={isActive}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </Surface>
      <div className="p-4 border border-t-0 border-[#E3E3E3] rounded-b-[8px] bg-white">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}

Tabs.displayName = 'Tabs';
