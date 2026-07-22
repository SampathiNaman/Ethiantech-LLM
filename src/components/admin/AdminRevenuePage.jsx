import React from "react";
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
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { monthlyRevenue, revenueByCategory } from "../../data/adminData";

const summaryCards = [
  { label: "Total Revenue", value: "$128,430", sub: "All time", up: true, change: "+12.5%" },
  { label: "This Month", value: "$16,330", sub: "December 2024", up: true, change: "+4.5%" },
  { label: "Last Month", value: "$15,600", sub: "November 2024", up: true, change: "+11.5%" },
  { label: "Avg. Monthly", value: "$10,702", sub: "12-month average", up: true, change: "+8.3%" },
];

export default function AdminRevenuePage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">Revenue</h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Track your platform revenue and financial performance
        </p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-[#494949]">{card.label}</p>
              <span
                className="flex items-center gap-0.5 text-[13px] font-medium"
                style={{ color: card.up ? "#16A34A" : "#DC2626" }}
              >
                {card.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {card.change}
              </span>
            </div>
            <p className="mt-2 text-[26px] font-semibold text-[#252525]">
              {card.value}
            </p>
            <p className="mt-0.5 text-[13px] text-[#494949]/70">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] xl:col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#D62A91]" />
            <h2 className="text-[18px] font-semibold text-[#252525]">
              Monthly Revenue
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
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
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#D62A91"
                strokeWidth={2.5}
                fill="url(#revenueGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h2 className="mb-6 text-[18px] font-semibold text-[#252525]">
            Revenue by Category
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueByCategory} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fontSize: 12, fill: "#494949" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="category"
                tick={{ fontSize: 13, fill: "#494949" }}
                axisLine={false}
                tickLine={false}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontSize: 14,
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Bar dataKey="revenue" fill="#D62A91" radius={[0, 6, 6, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
