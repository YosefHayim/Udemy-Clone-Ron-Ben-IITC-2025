import Description from "../Description/Description";
import Requirements from "../Requirements/Requirements";
import Section from "../Section/Section";
import TotalCourseLength from "../TotalCourseLength/TotalCourseLength";

const CourseContent = ({ description, whoThisFor, requirements }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[1.2em] mb-[1em]">Course Content</h2>
      <TotalCourseLength />
      <div>
        <Section />
        <Section />
      </div>
      <hr className="w-[550px] mt-[2em]" />
      <Requirements requirements={requirements} />
      <Description description={description} whoThisFor={whoThisFor} />
    </div>
  );
};

export default CourseContent;
