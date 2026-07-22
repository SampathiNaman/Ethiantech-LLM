import React, { useState } from "react";
import coursesData from "../../data/coursesData";

function StatusToggle({ initialStatus }) {
  const [isLive, setIsLive] = useState(initialStatus === "Live");

  return (
    <button
      role="switch"
      aria-checked={isLive}
      onClick={() => setIsLive(!isLive)}
      className={`relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer items-center rounded-full transition-colors ${isLive ? "bg-[#D62A91]" : "bg-[#CBD6E4]"
        }`}
    >
      <span
        className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform ${isLive ? "translate-x-6" : "translate-x-0"
          }`}
      />
    </button>
  );
}

export default function TutorCoursesPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">My Courses</h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Manage and view all your published courses
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
              <th className="px-5 py-4 font-medium">Course</th>
              <th className="px-5 py-4 font-medium">Students</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 text-right font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course, index) => (
              <tr
                key={course.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                }}
                className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-9 w-16 rounded object-cover shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                    />
                    <span className="max-w-[320px] leading-snug text-[#252525]">
                      {course.title}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">{course.students}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <StatusToggle initialStatus={course.status} />
                    <span
                      className={`text-[14px] ${course.status === "Live"
                          ? "text-[#D62A91]"
                          : "text-[#252525]/60"
                        }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-right font-medium text-[#252525]">
                  ${course.earnings.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
