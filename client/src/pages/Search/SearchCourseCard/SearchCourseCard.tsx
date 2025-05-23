import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseRecap from "@/components/CourseCard/CourseRecap/CourseRecap";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import { useNavigate } from "react-router-dom";

const SearchCourseCard = ({ course }) => {
  const navigate = useNavigate();

  if (!course) {
    console.log("Course is undefined", course);
    return;
  }

  const handleCardClick = (courseId: string) => {
    navigate(`/course-view/${courseId}`);
    return;
  };

  return (
    <div id={course._id} onClick={() => handleCardClick(course._id)}>
      <div className="flex w-auto cursor-pointer items-start justify-between">
        <div className="flex items-start justify-center gap-[1em] text-[0.8rem]">
          <CourseImg courseImg={course.courseImg} />

          <div className="flex w-full flex-col items-start justify-start gap-[0.3em] text-[0.8rem]">
            <CourseTitle title={course.courseName} />
            <CourseRecap recapInfo={course.courseRecapInfo} />
            <CourseInstructor instructor={course.courseInstructor.fullName} />
            <CourseRatings totalRatings={course.totalRatings} avgRatings={course.averageRating} />
            <CourseLength
              courseLevel={course.courseLevel}
              totalMinutes={course.totalCourseDuration}
              totalLectures={course.totalCourseLessons}
            />
            <CourseTag />
          </div>
        </div>
        <CoursePrice
          displayPercent={false}
          extraCSS={`text-sm`}
          fullPrice={course.courseFullPrice}
          discountPrice={course.courseDiscountPrice}
        />
      </div>
      <hr className="my-4 w-full" />
    </div>
  );
};

export default SearchCourseCard;
