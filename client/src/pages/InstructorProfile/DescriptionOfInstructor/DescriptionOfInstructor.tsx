import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import InstructorCourses from "../InstructorCourses/InstructorCourses";

const DescriptionOfInstructor: React.FC<{
  backgroundOfInstructor: string;
  coursesRelatedIds: string[];
}> = ({ backgroundOfInstructor, coursesRelatedIds }) => {
  const [isExpanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
        style={{
          maxHeight: isExpanded ? "none" : "310px",
          WebkitMaskImage: isExpanded
            ? "none"
            : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
          maskImage: isExpanded
            ? "none"
            : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
        className="flex w-[500px] flex-col items-start justify-start gap-[2em]"
      >
        <b className="font-bold">About me</b>
        <p>{backgroundOfInstructor}</p>
      </div>
      <div
        className="flex w-[115px] cursor-pointer items-center gap-[1em] rounded-[0.2em] py-[0.5em] pl-[0.5em] hover:bg-purpleHoverBtn"
        onClick={handleToggle}
      >
        <span className="font-bold text-purpleStatic hover:text-purpleHover ">
          {isExpanded ? "Show less" : "Show more"}
        </span>
        {isExpanded ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
      <div className="mt-[1em]">
        <InstructorCourses coursesRelatedIds={coursesRelatedIds} />
      </div>
    </div>
  );
};

export default DescriptionOfInstructor;
