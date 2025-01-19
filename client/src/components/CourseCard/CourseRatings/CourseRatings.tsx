import { CourseRatingsProps } from "@/types/types";

const CourseRatings: React.FC<CourseRatingsProps> = ({
  avgRatings = 4.6,
  stars = "★★★★☆",
  totalRatings = 222759,
}) => {
  return (
    <div className="flex text-gray-500 text-[0.7em] items-center gap-[0.2em]">
      <b className="text-[1.2em] text-black">{avgRatings}</b>
      <p className="text-[1.2em] text-star">{stars}</p>
      <p>({totalRatings} ratings)</p>
    </div>
  );
};

export default CourseRatings;
