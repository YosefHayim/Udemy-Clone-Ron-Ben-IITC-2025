const CourseInstructor = ({
  instructor = "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
}) => {
  return <p className="text-gray-500 text-[0.7em]">By {instructor}</p>;
};

export default CourseInstructor;
