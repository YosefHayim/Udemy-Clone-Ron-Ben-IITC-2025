import CourseRating from "../../CourseRating/CourseRating";
import CoursePrice from "../../StudentsAlsoBought/CoursePrice/CoursePrice";
import FaqCourseImg from "../FaqCourseImg/FaqCourseImg";
import FaqCourseName from "../FaqCourseName/FaqCourseName";
import FaqInstructName from "../FaqInstructName/FaqInstructName";
import FaqTotalStudentsCourse from "../FaqTotalStudentsCourse/FaqTotalStudentsCourse";

const FrequentlyCourseCard = () => {
  return (
    <div className="flex flex-col p-[1em]">
      <div className="flex flex-row gap-[1em]">
        <FaqCourseImg />
        <div>
          <FaqCourseName />
          <FaqInstructName />
          <div className="flex flex-row items-center gap-[0.5em]">
            <CourseRating colorRating="text-black" amountOfStars={4} />
            <FaqTotalStudentsCourse />
          </div>
        </div>
        <div>
          <CoursePrice />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyCourseCard;
