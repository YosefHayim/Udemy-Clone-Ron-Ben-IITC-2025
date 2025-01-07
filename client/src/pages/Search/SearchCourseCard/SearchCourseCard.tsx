import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseRecap from "@/components/CourseCard/CourseRecap/CourseRecap";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";

const SearchCourseCard = () => {
  return (
    <div>
      <div className="flex justify-start items-start pb-[1.6em] w-full gap-[1em] cursor-pointer pt-[1.6em]">
        <CourseImg widthChosen="w-[260px]" />
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
