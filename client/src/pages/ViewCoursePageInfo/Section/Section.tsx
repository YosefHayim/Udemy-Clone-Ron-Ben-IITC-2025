import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import SectionName from "./SectionName/SectionName";
import SectionDuration from "./SectionDuration/SectionDuration";
import Lesson from "../Lesson/Lesson";
import { LessonProps } from "../../types/types";

const Section: React.FC<{
  lessonsOfSection: LessonProps[];
  sectionName: string;
}> = ({ lessonsOfSection, sectionName }) => {
  const [isClicked, setClicked] = useState(false);

  const totalDuration =
    lessonsOfSection?.reduce(
      (sum, lesson) => sum + (lesson.duration || 0),
      0
    ) || 0;

  return (
    <div>
      <div
        onClick={() => setClicked(!isClicked)}
        className="cursor-pointer flex flex-row bg-bgCommercial w-[550px] text-languageText items-center justify-around p-[0.8em] border border-borderCommercial"
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
        >
          <MdOutlineKeyboardArrowUp />
        </div>
        <SectionName name={sectionName} />
        <SectionDuration
          duration={totalDuration}
          totalLessons={lessonsOfSection.length}
        />
      </div>

      <div className={isClicked ? "hidden" : "block w-[550px]"}>
        {lessonsOfSection?.length > 0 ? (
          lessonsOfSection.map((lesson, index) => (
            <Lesson
              key={lesson._id}
              title={lesson.title || ""}
              videoUrl={lesson.videoUrl || ""}
              duration={lesson.duration || 0}
              isQuizzLesson={index === lessonsOfSection.length - 1} // Example: Make last one a quiz
            />
          ))
        ) : (
          <p>No lessons available.</p>
        )}
      </div>
    </div>
  );
};

export default Section;
