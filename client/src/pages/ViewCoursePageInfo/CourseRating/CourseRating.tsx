import { MdOutlineStarPurple500 } from "react-icons/md";

const CourseRating = ({ courseRating = 4.1 }) => {
  return (
    <div className="flex items-center gap-[0.2em]">
      <b className="text-[#f69c08]">{courseRating}</b>
      <MdOutlineStarPurple500 className="text-[#f69c08]" />
    </div>
  );
};

export default CourseRating;
