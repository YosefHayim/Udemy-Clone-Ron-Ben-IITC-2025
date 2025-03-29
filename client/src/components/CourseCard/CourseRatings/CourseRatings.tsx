const CourseRatings: React.FC<{ avgRatings?: number; stars?: string; totalRatings?: number }> = ({
  avgRatings = 0,
  stars = "★★★★☆",
  totalRatings = 0,
}) => {
  return (
    <div className="flex flex-row items-center  gap-[0.2em] text-gray-500">
      <b className="text-[1.2em] text-ratings">{avgRatings.toFixed(1)}</b>
      <p className="text-[1.2em] text-star">{stars}</p>
      <p>({totalRatings})</p>
    </div>
  );
};

export default CourseRatings;
