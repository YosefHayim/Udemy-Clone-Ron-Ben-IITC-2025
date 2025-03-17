import { CourseContentProps } from "../../types/types";
import Description from "../Description/Description";
import Requirements from "../Requirements/Requirements";
import Section from "../Section/Section";
import TotalCourseLength from "../TotalCourseLength/TotalCourseLength";

const CourseContent: React.FC<CourseContentProps> = ({
  description,
  whoThisFor,
  requirements,
  totalCourseDuration,
  totalCourseLessons,
  totalCourseSections,
  sectionsOfCourse,
}) => {
  if (sectionsOfCourse.length === 0) {
    return (
      <div>
        <b>This course has no sections and lessons yet</b>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[1.2em] mb-[1em]">Course Content</h2>
      <TotalCourseLength
        totalCourseLessons={totalCourseLessons}
        totalCourseDuration={totalCourseDuration}
        totalCourseSections={totalCourseSections}
      />
      <div>
        {sectionsOfCourse.map((courseSection) => (
          <div key={courseSection._id}>
            <Section
              lessonsOfSection={courseSection.lessons}
              sectionName={courseSection.title}
            />
          </div>
        ))}
      </div>
      <hr className="w-[550px] mt-[2em]" />
      <Requirements requirements={requirements} />
      <Description description={description} whoThisFor={whoThisFor} />
    </div>
  );
};

export default CourseContent;
