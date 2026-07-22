import React from "react";
import { User } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  DollarSign,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import { tutorStats, earningsOverTime, studentsOverTime } from "../../data/tutorData";
import studentsData from "../../data/studentsData";

const icons = [DollarSign, Users, BookOpen, Star];
const accents = ["#D62A91", "#5F6FFF", "#10B981", "#F59E0B"];

export default function TutorDashboardPage() {
  const recentStudents = studentsData.slice(0, 5);

  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Dashboard
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Overview of your courses, earnings, and student enrollments
        </p>
      </div>

      {/* Stat Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tutorStats.map((card, i) => {
          const Icon = icons[i];
          const accent = accents[i];
          return (
            <div
              key={card.label}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${accent}15` }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[13px] font-medium"
                  style={{
                    backgroundColor: card.up ? "#DCFCE7" : "#FEE2E2",
                    color: card.up ? "#16A34A" : "#DC2626",
                  }}
                >
                  {card.change}
                </span>
              </div>
              <p className="text-[14px] text-[#494949]">{card.label}</p>
              <p className="mt-1 text-[28px] font-semibold text-[#252525]">
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="mb-8 grid gap-6 xl:grid-cols-2">
        {/* Earnings Over Time */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-2">
            <DollarSign size={18} className="text-[#D62A91]" />
            <h2 className="text-[18px] font-semibold text-[#252525]">
              Earnings Over Time
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={earningsOverTime}>
              <defs>
                <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D62A91" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#D62A91" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 13, fill: "#494949" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 13, fill: "#494949" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Earnings"]}
              />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#D62A91"
                strokeWidth={2.5}
                fill="url(#earningsGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Student Enrollment Trend */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-2">
            <Users size={18} className="text-[#D62A91]" />
            <h2 className="text-[18px] font-semibold text-[#252525]">
              Student Enrollment Trend
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={studentsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 13, fill: "#494949" }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 13, fill: "#494949" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [value.toLocaleString(), "Students"]}
              />
              <Bar
                dataKey="students"
                fill="#D62A91"
                radius={[6, 6, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Enrollments */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h2 className="mb-6 text-[18px] font-semibold text-[#252525]">
          Recent Enrollments
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
                <th className="w-[50px] px-5 py-3 font-medium">#</th>
                <th className="px-5 py-3 font-medium">Student Name</th>
                <th className="px-5 py-3 font-medium">Course</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student, index) => (
                <tr
                  key={student.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                  }}
                  className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
                >
                  <td className="px-5 py-3.5">{student.id}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#D62A91]/10">
                        <User size={14} className="text-[#D62A91]" />
                      </div>
                      <span className="whitespace-nowrap font-medium text-[#252525]">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="line-clamp-1">{student.course}</span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5">{student.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
