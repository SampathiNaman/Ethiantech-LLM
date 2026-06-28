import React from 'react';
import Text from '../../primitives/Text';

const StudentTable = ({ title, rows = [] }) => {
  return (
    <div>
      {title && (
        <Text variant="heading-sm" className="text-gray-800 mb-6">{title}</Text>
      )}
      <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/5 text-[#696B80] text-xs font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Enrollment Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-black/[0.02] transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover border border-black/10" />
                    <Text variant="body-sm" className="text-gray-800 font-medium">{row.name}</Text>
                  </td>
                  <td className="px-6 py-4"><Text variant="body-sm" className="text-[#696B80]">{row.course}</Text></td>
                  <td className="px-6 py-4"><Text variant="body-sm" className="text-[#696B80]">{row.date}</Text></td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.status || 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
