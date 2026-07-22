import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { wishlistedCourses } from "../../data/studentData";

export default function StudentWishlistPage() {
  return (
    <div className="font-outfit">
      <div className="mb-8">
        <h1 className="text-[28px] font-semibold text-[#252525]">
          Wishlist
        </h1>
        <p className="mt-1 text-[15px] text-[#494949]">
          Courses you want to enroll in later
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {wishlistedCourses.map((course) => (
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
              <div className="absolute right-3 top-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#D62A91] shadow transition hover:bg-white">
                  <Heart size={18} className="fill-[#D62A91]" />
                </button>
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-1 line-clamp-2 text-[16px] font-semibold text-[#252525]">
                {course.title}
              </h3>
              <p className="mb-3 text-[13px] text-[#494949]">
                {course.instructor}
              </p>

              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-[14px] font-medium text-[#252525]">
                    {course.rating}
                  </span>
                </div>
                <span className="text-[18px] font-bold text-[#D62A91]">
                  {course.price}
                </span>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D62A91] py-2.5 text-[14px] font-medium text-white transition hover:bg-[#D62A91]/90">
                <ShoppingCart size={16} />
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
