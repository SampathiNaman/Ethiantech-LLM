import React from "react";
import { TrendingUp, Users, BookOpen, UserPlus } from "lucide-react";
import { statCards } from "../../data/adminData";

const icons = [TrendingUp, Users, BookOpen, UserPlus];
const accents = ["#D62A91", "#5F6FFF", "#2563EB", "#10B981"];

export default function AdminDashboardPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Overview of your platform performance
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card, i) => {
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
    </div>
  );
}
