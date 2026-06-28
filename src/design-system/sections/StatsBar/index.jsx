import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';

const StatsBar = ({ stats = [] }) => {
  if (!stats.length) return null;
  return (
    <Section className="py-12 bg-[#F7F9FD]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <Text variant="display-sm" className="text-[#D62A91]">{stat.value}</Text>
            <Text variant="body-sm" className="text-gray-500">{stat.label}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsBar;
