import React from "react";
import { User, MoreVertical } from "lucide-react";
import studentsData from "../../data/studentsData";

export default function StudentsEnrolledPage() {
  return (
    <div className="font-outfit">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Student Enrolled
        </h1>
      </div>

      {/* Student table */}
      <div className="overflow-x-auto rounded-[6px] border border-[#252525]/20">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="border-b border-[#252525]/20 bg-white text-left text-[14px] text-[#252525]">
              <th className="w-[50px] px-5 py-4 font-semibold">#</th>
              <th className="px-5 py-4 font-semibold">Student name</th>
              <th className="px-5 py-4 font-semibold">Course Title</th>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="w-[50px]" />
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, index) => (
              <tr
                key={student.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                }}
                className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
              >
                <td className="px-5 py-4">{student.id}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#EBEBEB]">
                      <User size={16} className="text-[#494949]" />
                    </div>
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="line-clamp-2">{student.course}</span>
                </td>
                <td className="whitespace-nowrap px-5 py-4">{student.date}</td>
                <td className="px-3">
                  <button className="text-[#252525]/50 transition hover:text-[#252525]/80">
                    <MoreVertical size={16} />
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
