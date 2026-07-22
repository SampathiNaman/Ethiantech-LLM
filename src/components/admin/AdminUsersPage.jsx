import React from "react";
import { User, MoreVertical } from "lucide-react";
import { allUsers } from "../../data/adminData";

function RoleBadge({ role }) {
  const isInstructor = role === "Instructor";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium ${
        isInstructor
          ? "bg-[#EDE9FE] text-[#7C3AED]"
          : "bg-[#E0F2FE] text-[#0284C7]"
      }`}
    >
      {role}
    </span>
  );
}

function StatusDot({ status }) {
  const isActive = status === "Active";
  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-block h-2 w-2 rounded-full ${
          isActive ? "bg-[#16A34A]" : "bg-[#9CA3AF]"
        }`}
      />
      <span
        className={`text-[14px] ${
          isActive ? "text-[#252525]" : "text-[#494949]"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default function AdminUsersPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-semibold text-[#252525]">
            User Management
          </h1>
          <p className="mt-1 text-[15px] text-[#494949]">
            {allUsers.length} users on the platform
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
              <th className="w-[50px] px-5 py-4 font-medium">#</th>
              <th className="px-5 py-4 font-medium">Name</th>
              <th className="px-5 py-4 font-medium">Email</th>
              <th className="px-5 py-4 font-medium">Role</th>
              <th className="px-5 py-4 font-medium">Joined</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="w-[50px]" />
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                }}
                className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
              >
                <td className="px-5 py-4">{user.id}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#EBEBEB]">
                      <User size={16} className="text-[#494949]" />
                    </div>
                    <span className="whitespace-nowrap font-medium text-[#252525]">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-5 py-4">
                  <RoleBadge role={user.role} />
                </td>
                <td className="whitespace-nowrap px-5 py-4">{user.joined}</td>
                <td className="px-5 py-4">
                  <StatusDot status={user.status} />
                </td>
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
