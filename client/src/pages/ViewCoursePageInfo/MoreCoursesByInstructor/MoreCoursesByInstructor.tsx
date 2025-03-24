import TitleSection from "./TitleSection/TitleSection";
import CourseCard from "./CourseCard/CourseCard";

const MoreCoursesByInstructor: React.FC<{ instructorName: string }> = ({
  instructorName,
}) => {
  return (
    <div>
      <TitleSection instructorName={instructorName} />
      <div className="flex w-[650px]  items-start justify-start gap-[1em]">
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
