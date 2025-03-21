import { CourseRatingsProps } from "@/types/types";

const CourseRatings: React.FC<CourseRatingsProps> = ({
  avgRatings = 0,
  stars = "★★★★☆",
  totalRatings = 0,
}) => {
  return (
    <div className="flex flex-row items-center  gap-[0.2em] text-gray-500">
      <b className="text-[1.2em] text-ratings">{avgRatings}</b>
      <p className="text-[1.2em] text-star">{stars}</p>
      <p>({totalRatings})</p>
    </div>
  );
};

export default CourseRatings;
