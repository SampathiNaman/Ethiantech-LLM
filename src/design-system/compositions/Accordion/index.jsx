import React from 'react';
import Surface from '../../primitives/Surface/index.jsx';
import Text from '../../primitives/Text/index.jsx';
import Icon from '../../primitives/Icon/index.jsx';

export default function Accordion({
  sections = [],
  expandedIndex = null,
  onChange,
  className = '',
}) {
  const [localExpanded, setLocalExpanded] = React.useState(expandedIndex);
  const activeIndex = onChange ? expandedIndex : localExpanded;

  const handleToggle = (index) => {
    if (onChange) {
      onChange(index === activeIndex ? null : index);
    } else {
      setLocalExpanded(index === localExpanded ? null : index);
    }
  };

  return (
    <div className={`divide-y divide-[#E3E3E3] border border-[#E3E3E3] rounded-[8px] overflow-hidden ${className}`}>
      {sections.map((section, index) => {
        const isExpanded = index === activeIndex;
        return (
          <div key={section.title || index}>
            <button
              onClick={() => handleToggle(index)}
              className={`w-full flex items-center justify-between px-4 h-[49px] bg-[#F7F9FD] hover:bg-[#F0F4FA] transition-colors`}
              aria-expanded={isExpanded}
            >
              <Text variant="sectionHeading">{section.title}</Text>
              <Icon
                name={isExpanded ? 'chevronUp' : 'chevronDown'}
                size={16}
                color="#6B7280"
              />
            </button>
            {isExpanded && (
              <div className="px-4 py-3 bg-white">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

Accordion.displayName = 'Accordion';
