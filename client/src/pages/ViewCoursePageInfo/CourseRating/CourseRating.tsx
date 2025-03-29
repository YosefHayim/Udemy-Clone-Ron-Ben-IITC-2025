import { MdOutlineStarPurple500 } from "react-icons/md";

const CourseRating: React.FC<{
  colorRating?: string;
  courseRating?: number;
  amountOfStars?: number;
  isShowRating?: boolean;
}> = ({
  colorRating = "text-[#f69c08]",
  courseRating = 0,
  amountOfStars = 1,
  isShowRating = false,
}) => {
  const validStars = isNaN(amountOfStars) || amountOfStars <= 0 ? 1 : Math.floor(amountOfStars);

  return (
    <div className="flex items-center gap-[0.1em] text-white">
      <b className={`${isShowRating ? `${colorRating} block` : "hidden"}`}>
        {courseRating > 0 ? courseRating : ""}
      </b>

      {Array(validStars)
        .fill(null)
        .map((_, index) => (
          <MdOutlineStarPurple500 key={index} className="text-[#f69c08]" />
        ))}
    </div>
  );
};

export default CourseRating;
