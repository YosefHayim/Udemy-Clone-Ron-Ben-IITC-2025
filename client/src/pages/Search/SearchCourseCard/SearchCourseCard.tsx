import CourseImg from "@/components/CourseCard/CourseImg/CourseImg";
import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseRatings from "@/components/CourseCard/CourseRatings/CourseRatings";
import CourseRecap from "@/components/CourseCard/CourseRecap/CourseRecap";
import CourseTag from "@/components/CourseCard/CourseTag/CourseTag";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import CourseLength from "@/pages/ViewCoursePageInfo/MoreCoursesByInstructor/CourseLength/CourseLength";
import { CourseTypeProps } from "@/types/types";
import { useNavigate } from "react-router-dom";

const SearchCourseCard: React.FC<{ course: CourseTypeProps }> = ({
  course,
}) => {
  if (!course) {
    console.log("Course is undefined", course);
  }

  const navigate = useNavigate();

  const handleCardClick = (courseId: string) => {
    navigate(`/course-view/${courseId}`);
  };

  return (
    <div id={course._id} onClick={() => handleCardClick(course._id)}>
      <div className="flex w-full cursor-pointer flex-wrap items-start justify-between pb-[1.6em] pt-[1.6em]">
        <div className="flex items-start justify-center gap-[0.3em]">
          <CourseImg courseImg={course.courseImg} widthChosen="200px" />
          <div className="flex w-full flex-col items-start justify-start gap-[0.2em]">
            <CourseTitle title={course.courseName} />
            <CourseRecap recapInfo={course.courseRecapInfo} />
            <CourseInstructor instructor={course.courseInstructor.fullName} />
            <CourseRatings
              totalRatings={course.totalRatings}
              avgRatings={course.averageRating}
            />
            <CourseLength
              courseLevel={course.courseLevel}
              totalMinutes={course.totalCourseDuration}
              totalLectures={course.totalCourseLessons}
            />
            <CourseTag />
          </div>
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
