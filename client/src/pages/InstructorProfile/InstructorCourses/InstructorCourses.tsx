import { Course } from "@/types/types";
import CourseCardInstructorRelated from "../CourseCardInstructorRelated/CourseCardInstructorRelated";
import { useNavigate } from "react-router-dom";

const InstructorCourses: React.FC<{ coursesRelatedIds: string[] }> = ({ coursesRelatedIds }) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const courseDiv = target.closest("div[id]");
    console.log(courseDiv?.id);
    const courseId = courseDiv?.id;
    navigate(`/course-view/${courseId}`);
  };

  return (
    <div className="w-full">
      <b>My courses({coursesRelatedIds.length})</b>
      <div className="mt-[1.5em] grid grid-cols-2 gap-[1em]" onClick={handleNavigate}>
        {coursesRelatedIds.map((course) => (
          <CourseCardInstructorRelated
            key={course._id}
            courseId={course._id}
            totalCourseDuration={course.totalCourseDuration}
            courseImg={course.courseImg}
            courseDiscountPrice={course.courseDiscountPrice}
            courseInstructorName={course.courseInstructor.fullName}
            courseFullPrice={course.courseFullPrice}
            courseName={course.courseName}
            courseTag={course.courseTag}
            totalRatings={course.totalRatings}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorCourses;
