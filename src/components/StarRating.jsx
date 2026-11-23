import { Star } from "lucide-react";

export default function StarRating({ rating = 5, size = 18 }) {
  return (
    <div className="stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={size} className={n <= rating ? "star-filled" : "star-empty"} />
      ))}
    </div>
  );
}
