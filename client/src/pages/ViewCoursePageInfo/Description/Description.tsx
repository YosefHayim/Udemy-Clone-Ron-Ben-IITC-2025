import { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Description: React.FC<{ description: string; whoThisFor: string[] }> = ({
  description,
  whoThisFor,
}) => {
  const [isExpanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div
        className="overflow-hidden"
        style={{
          maxHeight: isExpanded ? "none" : "280px",
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
        <div className="flex flex-col gap-[1em]">
          <h2 className="font-sans text-[1.2em] font-extrabold">Description</h2>
          <p className=" mb-[2em]">{description}</p>
        </div>
        <div className="mt-[1.5em]">
          <h2 className="font-sans text-[1.5em] font-extrabold">
            Who is this course for?:
          </h2>
          <ul className=" list-disc">
            <li>{whoThisFor}</li>
          </ul>
        </div>
      </div>
      <div
        className="mt-[1em] flex cursor-pointer items-center gap-[1em]"
        onClick={handleToggle}
      >
        <span className="font-sans font-extrabold text-purpleStatic hover:text-purpleHover ">
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

export default Description;
