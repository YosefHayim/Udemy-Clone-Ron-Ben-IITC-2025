import CourseRating from "../CourseRating/CourseRating";
import CourseStudentRatings from "../CourseStudentsRatings/CourseStudentRatings";

const StickyCourseNavbar = () => {
  return (
    <div className="fixed">
      <h2 className="font-bold">
        Electronics : Semiconductor - A thorough understanding
      </h2>
      <div className="flex flex-row items-center gap-[0.5em]">
        <CourseRating />
        <CourseStudentRatings />
      </div>
    </div>
  );
};

export default StickyCourseNavbar;
