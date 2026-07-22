import React from "react";
import { User, Star } from "lucide-react";
import { instructors } from "../../data/adminData";

export default function AdminInstructorsPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Instructors
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Manage and view all instructors on the platform
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full min-w-[750px] border-collapse">
          <thead>
            <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
              <th className="px-5 py-4 font-medium">Instructor</th>
              <th className="px-5 py-4 font-medium">Courses</th>
              <th className="px-5 py-4 font-medium">Students</th>
              <th className="px-5 py-4 font-medium">Avg Rating</th>
              <th className="px-5 py-4 text-right font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((inst, index) => (
              <tr
                key={inst.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                }}
                className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#D62A91]/10">
                      <User size={18} className="text-[#D62A91]" />
                    </div>
                    <span className="whitespace-nowrap font-medium text-[#252525]">
                      {inst.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">{inst.courses}</td>
                <td className="px-5 py-4">{inst.students.toLocaleString()}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-[#252525]">{inst.rating}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-right font-medium text-[#252525]">
                  ${inst.earnings.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
