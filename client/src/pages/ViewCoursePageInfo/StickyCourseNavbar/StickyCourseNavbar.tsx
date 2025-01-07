import CourseRating from "../CourseRating/CourseRating";
import CourseStudentRatings from "../CourseStudentsRatings/CourseStudentRatings";

const StickyCourseNavbar = () => {
  return (
    <div className="fixed left-0 top-[2%] bg-[#1c1d1f] px-[1em] py-[0.5em] text-[0.8em] w-full text-white">
      <h2 className="font-bold">
        Electronics : Semiconductor - A thorough understanding
      </h2>
      <div className="flex flex-row items-start justify-start gap-[0.5em]">
        <CourseRating />
        <CourseStudentRatings />
      </div>
    </div>
  );
};

export default StickyCourseNavbar;
