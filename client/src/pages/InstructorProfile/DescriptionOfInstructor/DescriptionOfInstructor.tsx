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
        className="flex flex-col items-start justify-start w-[500px] gap-[2em]"
      >
        <b className="font-bold">About me</b>
        <p>{backgroundOfInstructor}</p>
      </div>
      <div
        className="pl-[0.5em] py-[0.5em] rounded-[0.2em] flex gap-[1em] items-center cursor-pointer hover:bg-purpleHoverBtn w-[115px]"
        onClick={handleToggle}
      >
        <span className="text-purpleStatic hover:text-purpleHover font-bold ">
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
