import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const WhatYouLearn: React.FC<{ prosCourse: string[] }> = ({ prosCourse }) => {
  const [isExpanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  if (!prosCourse) {
    return null;
  }

  const half = Math.ceil(prosCourse.length / 2); // Split the array into two columns
  const firstColumn = prosCourse.slice(0, half);
  const secondColumn = prosCourse.slice(half);

  return (
    <div>
      <div
        className="flex flex-col items-start justify-start border p-[1em] w-[700px] text-[0.9em] mt-[10em]"
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
        <h2 className="font-bold w-full p-[0.5em] text-[1.5em]">
          What you'll learn
        </h2>
        <div className="flex">
          <div className="flex-col">
            <ul className="flex-col">
              {firstColumn.map((item, index) => (
                <li key={index} className="flex items-center gap-[1em]">
                  <IoMdCheckmark className="text-[1.5em]" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-col">
            <ul>
              {secondColumn.map((item, index) => (
                <li key={index} className="flex items-center gap-[1em]">
                  <IoMdCheckmark className="text-[1.5em]" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="pl-[0.5em] py-[0.5em] rounded-[0.2em] flex gap-[1em] items-center cursor-pointer hover:bg-purpleHoverBtn w-[100px]"
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
    </div>
  );
};

export default WhatYouLearn;
