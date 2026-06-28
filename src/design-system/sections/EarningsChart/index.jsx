import React from 'react';
import Text from '../../primitives/Text';

const EarningsChart = ({ title, data = [], badge = 'Monthly' }) => {
  if (!data.length) return null;
  const maxVal = Math.max(...data.map(d => d.amount));

  return (
    <div className="bg-white p-6 rounded-xl border border-black/5 space-y-6">
      <div className="flex items-center justify-between">
        <Text variant="heading-sm" className="text-gray-800">{title || 'Earnings Overview'}</Text>
        {badge && (
          <span className="text-xs font-medium text-[#696B80] bg-black/5 px-2.5 py-1 rounded-full">{badge}</span>
        )}
      </div>
      <div className="h-64 flex items-end gap-2 relative">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
          {[0, 1, 2, 3].map(i => <div key={i} className="border-b border-black w-full h-0" />)}
        </div>
        {data.map((item, i) => {
          const percentHeight = (item.amount / maxVal) * 100;
          return (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group z-10">
              <div className="text-[10px] text-[#696B80] font-semibold opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                ${(item.amount / 1000)}k
              </div>
              <div
                className="w-full rounded-t-md transition-all"
                style={{
                  height: `${percentHeight}%`,
                  backgroundColor: i % 2 === 0 ? '#FF532E' : '#D62A91',
                }}
              />
              <span className="text-xs text-[#696B80] mt-2 font-medium">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarningsChart;
