import React from 'react';
import Text from '../../primitives/Text';

const TopBar = ({ greeting, notifications = 0, profile }) => {
  return (
    <header className="h-20 bg-white border-b border-black/5 flex items-center justify-between px-8">
      <Text variant="heading-sm" className="text-gray-800">
        {greeting || 'Welcome'}
      </Text>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-black/5 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {notifications > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D62A91] rounded-full border-2 border-white" />
          )}
        </button>
        {profile && (
          <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10">
            <img src={profile.src} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;
