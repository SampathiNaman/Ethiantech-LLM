import React from 'react';
import Text from '../../primitives/Text';
import Button from '../../primitives/Button';

const TutorCourseTable = ({ courses = [], onToggleStatus, onAddCourse }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Text variant="heading-sm" className="text-gray-800">My Courses</Text>
        {onAddCourse && (
          <Button variant="primary" size="sm" onClick={onAddCourse}>
            + Add Course
          </Button>
        )}
      </div>
      <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/5 text-[#696B80] text-xs font-semibold uppercase tracking-wider bg-black/[0.01]">
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Earnings</th>
                <th className="px-6 py-4">Students</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-black/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-9 rounded overflow-hidden border border-black/10 flex-shrink-0">
                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <Text variant="body-sm" className="text-gray-800 font-medium max-w-sm truncate">
                        {course.title}
                      </Text>
                    </div>
                  </td>
                  <td className="px-6 py-4"><Text variant="body-sm" className="text-[#696B80]">${course.price}</Text></td>
                  <td className="px-6 py-4"><Text variant="body-sm" className="text-[#696B80]">{course.students}</Text></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onToggleStatus?.(course.id)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          course.status === 'Live' ? 'bg-[#1462EC]' : 'bg-[#CBD5E1]'
                        }`}
                      >
                        <span
                          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                            course.status === 'Live' ? 'translate-x-[18px]' : 'translate-x-[2px]'
                          }`}
                        />
                      </button>
                      <span className={`text-xs font-semibold ${course.status === 'Live' ? 'text-[#1462EC]' : 'text-[#696B80]'}`}>
                        {course.status}
                      </span>
                    </div>
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

export default TutorCourseTable;
