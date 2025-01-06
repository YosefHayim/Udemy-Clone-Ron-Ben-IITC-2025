import React from "react";

const CourseInstructor = ({
  instructor = "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
}) => {
  return <p className="text-gray-500 text-[0.7em]">{instructor}</p>;
};

export default CourseInstructor;
