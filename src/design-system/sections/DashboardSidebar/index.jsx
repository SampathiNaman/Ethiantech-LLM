import React from 'react';
import Text from '../../primitives/Text';

const iconPaths = {
  dashboard: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z',
  courses: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  earnings: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  students: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
};

const DashboardSidebar = ({ activeItem, items = [], onNavigate }) => {
  return (
    <aside className="w-64 hidden md:flex flex-col p-6 border-r border-black/5 min-h-screen">
      <div className="mb-8">
        <Text variant="display-sm" className="text-[#D62A91] font-semibold">EthianTech LLM</Text>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onNavigate?.(item.href)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                isActive
                  ? 'bg-[#F2F3FF] text-[#D62A91]'
                  : 'text-gray-500 hover:bg-black/5'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[item.icon] || iconPaths.dashboard} />
              </svg>
              <Text variant="body-md" className="font-medium">{item.label}</Text>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
