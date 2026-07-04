import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5 text-orange-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-current" : ""}
        />
      ))}
    </div>
  );
}
