import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseRecap from "@/components/CourseCard/CourseRecap/CourseRecap";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";

const SearchCourseCard = ({ course }) => {
  if (!course) {
    return;
  }

  return (
    <div className={course._id}>
      <div className="flex justify-start items-start pb-[1.6em] w-full gap-[1em] cursor-pointer pt-[1.6em]">
        <CourseImg courseImg={course.courseImg} widthChosen="w-[260px]" />
        <div className="flex flex-col items-start justify-start gap-[0.3em]">
          <CourseTitle title={course.courseName} />
          <CourseRecap recapInfo={course.recapInfo} />
          <CourseInstructor instructor={course.courseInstructor.fullName} />
          <CourseRatings />
          <CourseLength
            courseLevel={course.courseLevel}
            totalHours={course.totalCourseDuration}
            totalLectures={course.totalCourseLessons}
          />
          <CourseTag />
        </div>
        <CoursePrice
          fullPrice={course.courseFullPrice}
          discountPrice={course.courseDiscountPrice}
        />
      </div>
      <hr />
    </div>
  );
};

export default SearchCourseCard;
