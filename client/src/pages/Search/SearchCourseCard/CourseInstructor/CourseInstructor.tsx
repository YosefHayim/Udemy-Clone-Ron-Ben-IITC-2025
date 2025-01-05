import React from "react";

const CourseInstructor = ({ instructor }) => {
  return (
    <p className="text-gray-500 text-[0.7em]">
      {instructor ||
        "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller"}
    </p>
  );
};

export default CourseInstructor;
