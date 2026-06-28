import React from 'react';
import Text from '../../primitives/Text';

const EnrollmentTable = ({ title, columns = [], rows = [] }) => {
  if (!rows.length) return null;
  return (
    <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
      {title && (
        <div className="p-6 border-b border-black/5">
          <Text variant="heading-sm" className="text-gray-800">{title}</Text>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/5 text-[#696B80] text-xs font-semibold uppercase tracking-wider">
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 text-sm">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-black/[0.02] transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    {col.key === 'student' ? (
                      <div className="flex items-center gap-3">
                        <img
                          src={row.student?.avatar}
                          alt={row.student?.name}
                          className="w-8 h-8 rounded-full object-cover border border-black/10"
                        />
                        <Text variant="body-sm" className="text-gray-800 font-medium">{row.student?.name}</Text>
                      </div>
                    ) : col.key === 'status' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {row.status}
                      </span>
                    ) : (
                      <Text variant="body-sm" className="text-[#696B80]">{row[col.key]}</Text>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentTable;
