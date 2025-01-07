import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import SectionName from "./SectionName/SectionName";
import SectionDuration from "./SectionDuration/SectionDuration";
import Lesson from "../Lesson/Lesson";

const Section = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <div>
      <div
        onClick={() => setClicked(!isClicked)}
        className="cursor-pointer flex flex-row bg-[#f7f9fa] w-[550px] text-[#2d2f31] items-center justify-around p-[0.8em] border border-[#d1d7dc] border-[1px]"
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
        >
          <MdOutlineKeyboardArrowUp />
        </div>
        <SectionName />
        <SectionDuration />
      </div>
      <div className={isClicked ? "hidden" : "block w-[550px]"}>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson isQuizzLesson={true} />
      </div>
    </div>
  );
};

export default Section;
