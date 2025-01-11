import { MdOutlineStarPurple500 } from "react-icons/md";

const CourseRating = ({
  colorRating = "text-[#f69c08]",
  courseRating = 0,
  amountOfStars = 1,
  isShowRating = false,
}) => {
  return (
    <div className="flex items-center gap-[0.1em] z-10 text-white">
      <b className={`${!isShowRating ? `${colorRating} block ` : "hidden"}`}>
        {courseRating}
      </b>

      {/* Dynamically render stars */}

      {Array((amountOfStars = 1))
        .fill(null)
        .map((_, index) => (
          <MdOutlineStarPurple500 key={index} className="text-[#f69c08]" />
        ))}
    </div>
  );
};

export default CourseRating;
