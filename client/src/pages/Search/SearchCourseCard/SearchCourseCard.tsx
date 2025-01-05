import CourseImg from "./CourseImg/CourseImg";
import CourseTitle from "./CourseTitle/CourseTitle";
import CourseRecap from "./CourseRecap/CourseRecap";
import CourseInstructor from "./CourseInstructor/CourseInstructor";
import CourseRatings from "./CourseRatings/CourseRatings";
import CourseTag from "./CourseTag/CourseTag";
import CoursePrice from "./CoursePrice/CoursePrice";

const SearchCourseCard = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-start items-start pb-[1.6em] w-full gap-[1em] cursor-pointer pt-[1.6em]">
        <CourseImg />
        <div className="flex flex-col items-start justify-start gap-[0.3em]">
          <CourseTitle />
          <CourseRecap />
          <CourseInstructor />
          <CourseRatings />
          <CourseTag />
        </div>
        <CoursePrice />
      </div>
      <hr />
    </div>
  );
};

export default SearchCourseCard;
