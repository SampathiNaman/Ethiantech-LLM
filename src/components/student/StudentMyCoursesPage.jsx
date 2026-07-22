import React from "react";
import { BookOpen, CheckCircle, Clock, Play } from "lucide-react";
import { enrolledCourses } from "../../data/studentData";

function ProgressBar({ progress }) {
  let color = "#D62A91";
  if (progress === 100) color = "#10B981";
  else if (progress === 0) color = "#CBD6E4";

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-[#DCFCE7] text-[#16A34A]",
    "In Progress": "bg-[#FDF2F8] text-[#D62A91]",
    "Not Started": "bg-gray-100 text-[#494949]",
  };
  const icons = {
    Completed: CheckCircle,
    "In Progress": Clock,
    "Not Started": Play,
  };
  const Icon = icons[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium ${styles[status]}`}
    >
      <Icon size={13} />
      {status}
    </span>
  );
}

export default function StudentMyCoursesPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          My Courses
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Continue learning from where you left off
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-[160px] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3">
                <StatusBadge status={course.status} />
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-1 line-clamp-2 text-[16px] font-semibold text-[#252525]">
                {course.title}
              </h3>
              <p className="mb-4 text-[13px] text-[#494949]">
                {course.instructor}
              </p>

              <div className="mb-3">
                <div className="mb-1.5 flex items-center justify-between text-[13px]">
                  <span className="text-[#494949]">
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span className="font-semibold text-[#252525]">
                    {course.progress}%
                  </span>
                </div>
                <ProgressBar progress={course.progress} />
              </div>

              {course.status !== "Not Started" && (
                <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#D62A91] py-2.5 text-[14px] font-medium text-white transition hover:bg-[#D62A91]/90">
                  <Play size={16} />
                  {course.status === "Completed" ? "Review Course" : "Continue Learning"}
                </button>
              )}
              {course.status === "Not Started" && (
                <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-[#D62A91] bg-white py-2.5 text-[14px] font-medium text-[#D62A91] transition hover:bg-[#D62A91]/5">
                  <Play size={16} />
                  Start Course
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
