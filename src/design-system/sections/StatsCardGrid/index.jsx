import React from 'react';
import Text from '../../primitives/Text';

const iconPaths = {
  enrollment: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  courses: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  earnings: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
};

const bgColors = ['bg-[#FFF5F2] text-[#FF532E]', 'bg-[#FFF8F2] text-[#D62A91]', 'bg-[#F2F9FF] text-blue-600'];

const StatsCardGrid = ({ cards = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div key={card.label} className="bg-white p-6 rounded-xl border border-black/5 flex items-center justify-between">
          <div className="space-y-1">
            <Text variant="body-sm" className="text-[#696B80] font-medium">{card.label}</Text>
            <Text variant="heading-lg" className="text-gray-800">{card.value}</Text>
          </div>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColors[i % bgColors.length]}`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[card.icon] || iconPaths.courses} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCardGrid;
