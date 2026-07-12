import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, PlusSquare, BookOpen, Users } from "lucide-react";
import TutorNavbar from "./TutorNavbar";
import Footer from "../Footer";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/tutor/dashboard" },
  { label: "Add Course", icon: PlusSquare, path: "/tutor/add-course" },
  { label: "My Courses", icon: BookOpen, path: "/tutor/courses" },
  { label: "Student Enrolled", icon: Users, path: "/tutor/students" },
];

export default function TutorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white font-outfit">
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[251px] flex-col border-r border-gray-300 bg-white transition-transform duration-200 lg:static lg:h-full lg:overflow-y-auto lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-5">
            <span className="text-[24px] font-semibold text-[#0E0E0E]">
              EthianTech LLM
            </span>
          </div>

          {/* Navigation */}
          <nav className="mt-2 flex flex-col gap-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/tutor/dashboard"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded px-3 py-2.5 text-[16px] transition-colors ${
                      isActive
                        ? "border-l-[3px] border-[#5F6FFF] bg-[#F2F3FF] pl-[9px] font-medium text-[#5F6FFF]"
                        : "border-l-[3px] border-transparent text-[#252525] hover:bg-gray-50"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </aside>

        {/* Main area */}
        <div className="flex flex-1 flex-col">
          <TutorNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Page content */}
          <main className="flex-1 overflow-auto bg-white p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer — full width below sidebar + main */}
      <Footer />
    </div>
  );
}
