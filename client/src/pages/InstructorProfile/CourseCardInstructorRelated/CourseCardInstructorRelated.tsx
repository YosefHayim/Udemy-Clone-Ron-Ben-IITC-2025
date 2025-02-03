import CourseRating from "@/pages/ViewCoursePageInfo/CourseRating/CourseRating";
import courseInstructorImgPlaceholder from "/images/course-of-instructor.png";
import { LuDot } from "react-icons/lu";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";

const CourseCardInstructorRelated = () => {
  return (
    <div>
      <div className=" flex flex-col items-start justify-start gap-[0.2em] cursor-pointer">
        <img src={courseInstructorImgPlaceholder} alt="" />
        <b className="w-[200px]">Fundamentals of Backend Engineering</b>
        <p>Hussein Nasser</p>
        <div className="flex flex-row items-center">
          <b className="text-[#BB6300]">4.7</b>
          <CourseRating amountOfStars={4.7} courseRating={0} />
          <p className="text-gray-500 text-[0.8em]">(5,174)</p>
        </div>
        <div className="text-gray-500 text-[0.8em] flex flex-row items-center justify-start gap-[0.2em]">
          <p>17.5 total hours </p>
          <LuDot />
          <p>59 lectures</p>
          <LuDot />
          <p>Intermediate</p>
        </div>
        <CoursePrice chooseFlex={`flex items-center`} />
        <CourseTag />
      </div>
    </div>
  );
};

export default CourseCardInstructorRelated;
