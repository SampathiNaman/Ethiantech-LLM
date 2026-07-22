import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart3, TrendingUp, Award, BookOpen, Clock } from "lucide-react";
import {
  performanceByCategory,
  scoreTrend,
  courseScores,
} from "../../data/studentData";

const perfStats = [
  { label: "Avg Score", value: "82%", icon: BarChart3, accent: "#D62A91" },
  { label: "Courses Done", value: "2 / 6", icon: BookOpen, accent: "#10B981" },
  { label: "Total Hours", value: "47.5", icon: Clock, accent: "#5F6FFF" },
  { label: "Rank", value: "Top 15%", icon: Award, accent: "#F59E0B" },
];

function GradeBadge({ grade }) {
  const styles = {
    A: "bg-[#DCFCE7] text-[#16A34A]",
    "A-": "bg-[#DCFCE7] text-[#16A34A]",
    "B+": "bg-[#FEF3C7] text-[#D97706]",
    B: "bg-[#FEF3C7] text-[#D97706]",
    "-": "bg-gray-100 text-[#494949]",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium ${styles[grade] || styles["-"]}`}
    >
      {grade}
    </span>
  );
}

function StatusDot({ status }) {
  const colors = {
    Completed: "#10B981",
    "In Progress": "#D62A91",
    "Not Started": "#9CA3AF",
  };
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ backgroundColor: colors[status] }}
      />
      <span className="text-[14px] text-[#252525]">{status}</span>
    </div>
  );
}

export default function StudentPerformancePage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Performance
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Your overall learning performance and course scores
        </p>
      </div>

      {/* Stat Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {perfStats.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${card.accent}15` }}
                >
                  <Icon size={22} style={{ color: card.accent }} />
                </div>
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
        {/* Radar Chart */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-2">
            <BarChart3 size={18} className="text-[#D62A91]" />
            <h2 className="text-[18px] font-semibold text-[#252525]">
              Score by Category
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={performanceByCategory}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fontSize: 12, fill: "#494949" }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fontSize: 11, fill: "#494949" }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#D62A91"
                fill="#D62A91"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [`${value}%`, "Score"]}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Score Trend */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#D62A91]" />
            <h2 className="text-[18px] font-semibold text-[#252525]">
              Score Trend
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={scoreTrend}>
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
                domain={[50, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [`${value}%`, "Score"]}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#D62A91"
                strokeWidth={2.5}
                dot={{ fill: "#D62A91", strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: "#D62A91" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Scores Table */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h2 className="mb-6 text-[18px] font-semibold text-[#252525]">
          Course-wise Scores
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-[#252525]/20 text-left text-[14px] text-[#252525]/70">
                <th className="px-5 py-3 font-medium">Course</th>
                <th className="px-5 py-3 font-medium">Score</th>
                <th className="px-5 py-3 font-medium">Grade</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {courseScores.map((item, index) => (
                <tr
                  key={item.course}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F7F9FD" : "#ffffff",
                  }}
                  className="border-b border-[#252525]/15 text-[14px] text-[#252525]/70 last:border-b-0"
                >
                  <td className="px-5 py-3.5 font-medium text-[#252525]">
                    {item.course}
                  </td>
                  <td className="px-5 py-3.5">
                    {item.score > 0 ? (
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.score}%`,
                              backgroundColor: item.score >= 80 ? "#10B981" : item.score >= 60 ? "#F59E0B" : "#CBD6E4",
                            }}
                          />
                        </div>
                        <span className="text-[#252525]">{item.score}%</span>
                      </div>
                    ) : (
                      <span className="text-[#494949]/50">-</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    <GradeBadge grade={item.grade} />
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusDot status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
