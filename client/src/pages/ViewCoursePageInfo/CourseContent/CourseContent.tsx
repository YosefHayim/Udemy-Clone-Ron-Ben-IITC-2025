import Description from "../Description/Description";
import Requirements from "../Requirements/Requirements";
import Section from "../Section/Section";
import TotalCourseLength from "../TotalCourseLength/TotalCourseLength";

const CourseContent = ({
  description,
  whoThisFor,
  requirements,
  totalCourseDuration,
  totalCourseLessons,
  totalCourseSections,
  sectionsOfCourse,
}) => {
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
          <Section
            key={courseSection._id}
            lessonsOfSection={courseSection.lessons}
            sectionName={courseSection.title}
          />
        ))}
      </div>
      <hr className="w-[550px] mt-[2em]" />
      <Requirements requirements={requirements} />
      <Description description={description} whoThisFor={whoThisFor} />
    </div>
  );
};

export default CourseContent;
