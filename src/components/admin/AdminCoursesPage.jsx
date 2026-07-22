import React, { useState } from "react";
import { allCourses } from "../../data/adminData";

function StatusBadge({ status }) {
  const isLive = status === "Live";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium ${
        isLive
          ? "bg-[#DCFCE7] text-[#16A34A]"
          : "bg-[#FEF3C7] text-[#D97706]"
      }`}
    >
      {status}
    </span>
  );
}

export default function AdminCoursesPage() {
  const [courses] = useState(allCourses);

  return (
    <div className="font-outfit">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-semibold text-[#252525]">
            Course Management
          </h1>
          <p className="mt-1 text-[15px] text-[#494949]">
            {courses.length} courses on the platform
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full min-w-[850px] border-collapse">
          <thead>
            <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
              <th className="px-5 py-4 font-medium">Course</th>
              <th className="px-5 py-4 font-medium">Instructor</th>
              <th className="px-5 py-4 font-medium">Students</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 text-right font-medium">Earnings</th>
              <th className="px-5 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
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
                      src={course.image}
                      alt={course.title}
                      className="h-9 w-16 rounded object-cover shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                    />
                    <span className="max-w-[280px] leading-snug text-[#252525]">
                      {course.title}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  {course.instructor}
                </td>
                <td className="px-5 py-4">{course.students.toLocaleString()}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={course.status} />
                </td>
                <td className="px-5 py-4 text-right font-medium text-[#252525]">
                  ${course.earnings.toLocaleString()}
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="rounded border border-[#252525]/20 px-3 py-1.5 text-[13px] text-[#252525]/70 transition hover:border-[#D62A91] hover:text-[#D62A91]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
