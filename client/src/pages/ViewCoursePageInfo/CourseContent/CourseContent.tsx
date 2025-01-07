import Description from "../Description/Description";
import Requirements from "../Requirements/Requirements";
import Section from "../Section/Section";
import TotalCourseLength from "../TotalCourseLength/TotalCourseLength";

const CourseContent = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[1.2em] mb-[1em]">Course Content</h2>
      <TotalCourseLength />
      <div>
        <Section />
        <Section />
      </div>
      <hr className="w-[550px] mt-[2em]" />
      <Requirements />
      <Description />
    </div>
  );
};

export default CourseContent;
