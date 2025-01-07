import { MdOutlineStarPurple500 } from "react-icons/md";

const CourseRating = ({ courseRating = 4.1 }) => {
  return (
    <div>
      <b>{courseRating}</b>
      <MdOutlineStarPurple500 />
    </div>
  );
};

export default CourseRating;
