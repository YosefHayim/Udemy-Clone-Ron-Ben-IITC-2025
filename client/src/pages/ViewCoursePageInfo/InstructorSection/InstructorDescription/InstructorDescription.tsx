import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const InstructorDescription: React.FC<{ descriptionInstructor: string }> = ({
  descriptionInstructor,
}) => {
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
        <div className="flex w-[700px] flex-col items-start justify-start gap-[0.5em] leading-[1.5em]">
          {descriptionInstructor}
        </div>
      </div>
      <div className="mt-[1em] flex cursor-pointer items-center gap-[1em]" onClick={handleToggle}>
        <span className="font-sans font-extrabold text-purpleStatic hover:text-purpleHover ">
          {isExpanded ? "Show less" : "Show more"}
        </span>
        {isExpanded ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
    </div>
  );
};

export default InstructorDescription;
