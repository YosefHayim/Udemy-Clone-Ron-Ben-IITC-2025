import Description from "../Description/Description";
import Requirements from "../Requirements/Requirements";
import Section from "../Section/Section";
import TotalCourseLength from "../TotalCourseLength/TotalCourseLength";

const CourseContent = () => {
  return (
    <div className="flex flex-col">
      <b>Course Content</b>
      <TotalCourseLength />
      <div>
        <Section />
        <Section />
      </div>
      <Requirements />
      <Description />
    </div>
  );
};

export default CourseContent;
