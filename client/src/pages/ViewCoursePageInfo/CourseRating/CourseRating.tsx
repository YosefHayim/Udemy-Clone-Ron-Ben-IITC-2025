import { MdOutlineStarPurple500 } from "react-icons/md";

const CourseRating = ({
  courseRating = 0,
  amountOfStars = 1,
  isShowRating = false,
}) => {
  return (
    <div className="flex items-center gap-[0.1em] z-[3000] text-white bg-[#1c1d1f]">
      <b className={`${!isShowRating ? "block" : "hidden"}`}>{courseRating}</b>

      {/* Dynamically render stars */}
      {Array(amountOfStars)
        .fill(null)
        .map((_, index) => (
          <MdOutlineStarPurple500
            key={index}
            className="text-[#f69c08] bg-[#1c1d1f]"
          />
        ))}
    </div>
  );
};

export default CourseRating;
