import CourseCardInstructorRelated from "../CourseCardInstructorRelated/CourseCardInstructorRelated";

const InstructorCourses = () => {
  return (
    <div className="w-full">
      <b>My courses(10)</b>
      <div className="mt-[1.5em] grid grid-cols-2 gap-[1em]">
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
        <CourseCardInstructorRelated />
      </div>
    </div>
  );
};

export default InstructorCourses;
