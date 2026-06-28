import React from 'react';
import Text from '../../primitives/Text';
import Badge from '../../primitives/Badge';

const CurriculumAccordion = ({ modules = [], onSelectLesson }) => {
  const [openModule, setOpenModule] = React.useState(null);

  return (
    <div className="space-y-1">
      {modules.map((mod) => (
        <div key={mod.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-4 py-3 bg-[#F7F9FD] hover:bg-gray-100 transition-colors text-left"
            onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)}
          >
            <Text variant="body-sm" className="text-[#292940] font-medium">{mod.title}</Text>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${openModule === mod.id ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openModule === mod.id && (
            <div className="divide-y divide-gray-100">
              {mod.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onSelectLesson?.(lesson)}
                >
                  {lesson.completed ? (
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-[#D62A91] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                  <Text variant="body-sm" className="text-gray-600 flex-1">{lesson.title}</Text>
                  <Text variant="meta" className="text-gray-400">{lesson.duration}</Text>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumAccordion;
