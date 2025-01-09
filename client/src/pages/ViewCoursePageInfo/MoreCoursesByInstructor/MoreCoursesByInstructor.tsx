import TitleSection from "./TitleSection/TitleSection";
import CourseCard from "./CourseCard/CourseCard";

const MoreCoursesByInstructor = ({ instructorName }) => {
  return (
    <div>
      <TitleSection instructorName={instructorName} />
      <div className="w-[650px] flex flex-row items-start justify-start gap-[1em]">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="my-[2em]">
        <hr />
      </div>
    </div>
  );
};

export default MoreCoursesByInstructor;
