import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { regionStudents } from "../../data/adminData";

const totalStudents = regionStudents.reduce((sum, r) => sum + r.value, 0);

export default function AdminStudentsPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Student Analytics
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Region-wise student distribution across the platform
        </p>
      </div>

      <div className="mb-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h2 className="mb-4 text-[18px] font-semibold text-[#252525]">
            Students by Region
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={regionStudents}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={130}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {regionStudents.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [value.toLocaleString(), "Students"]}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={10}
                formatter={(value) => (
                  <span className="text-[13px] text-[#494949]">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h2 className="mb-4 text-[18px] font-semibold text-[#252525]">
            Region Breakdown
          </h2>
          <div className="space-y-5">
            {regionStudents.map((region) => {
              const pct = ((region.value / totalStudents) * 100).toFixed(1);
              return (
                <div key={region.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: region.color }}
                      />
                      <span className="text-[15px] font-medium text-[#252525]">
                        {region.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[15px] font-semibold text-[#252525]">
                        {region.value.toLocaleString()}
                      </span>
                      <span className="ml-2 text-[13px] text-[#494949]">
                        ({pct}%)
                      </span>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: region.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
