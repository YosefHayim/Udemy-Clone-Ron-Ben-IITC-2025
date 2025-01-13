const CourseInstructor = ({
  instructor = "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
  shortCutInstructor = false,
}) => {
  const truncatedInstructor =
    shortCutInstructor && instructor.length > 20
      ? `${instructor.slice(0, 20)}...`
      : instructor;

  return <p className="text-gray-500 text-[0.7em]">By {truncatedInstructor}</p>;
};

export default CourseInstructor;
