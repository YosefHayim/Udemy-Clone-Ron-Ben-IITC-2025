import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const InstructorDescription = ({ descriptionInstructor }) => {
  const [isExpanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: isExpanded ? "none" : "100px",
          WebkitMaskImage: isExpanded
            ? "none"
            : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
          maskImage: isExpanded
            ? "none"
            : "linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0))",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <div className="w-[700px] flex flex-col items-start justify-start gap-[0.5em] leading-[1.5em]">
          {descriptionInstructor}
        </div>
      </div>
      <div
        className="flex gap-[1em] items-center mt-[1em] cursor-pointer"
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
    </div>
  );
};

export default InstructorDescription;
