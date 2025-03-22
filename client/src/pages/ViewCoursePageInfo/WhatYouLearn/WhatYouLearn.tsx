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
    <div className="border">
      <div
        className="mt-[10em] flex w-full flex-col items-start justify-start p-[1em]"
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
        <h2 className="w-full p-[0.5em] font-sans text-[1.5em] font-extrabold">
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
      </div>
      <div
        className="mb-4 ml-4 flex w-[115px] cursor-pointer items-center gap-[1em] rounded-[0.2em] py-[0.3em] pl-[0.2em] hover:bg-purpleHoverBtn"
        onClick={handleToggle}
      >
        <span className="m-[0.5em] font-sans font-extrabold text-purpleStatic hover:text-purpleHover ">
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

export default WhatYouLearn;
