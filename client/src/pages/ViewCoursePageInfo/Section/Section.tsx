import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import SectionName from "./SectionName/SectionName";
import SectionDuration from "./SectionDuration/SectionDuration";
import Lesson from "../Lesson/Lesson";

const Section = ({ lessonsOfSection, sectionName }) => {
  const [isClicked, setClicked] = useState(false);

  const totalDuration = lessonsOfSection.reduce(
    (sum, lesson) => sum + lesson.duration,
    0
  );

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
        <SectionName name={sectionName} />
        <SectionDuration duration={totalDuration} />
      </div>

      <div className={isClicked ? "hidden" : "block w-[550px]"}>
        {lessonsOfSection.map((lesson, index) => (
          <Lesson
            key={lesson._id}
            title={lesson.title}
            videoUrl={lesson.videoUrl}
            duration={lesson.duration}
            isQuizzLesson={index === lessonsOfSection.length - 1} // Example: Make last one a quiz
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
