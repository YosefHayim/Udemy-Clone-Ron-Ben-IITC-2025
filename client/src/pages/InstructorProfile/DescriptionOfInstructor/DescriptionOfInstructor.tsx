import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import InstructorCourses from "../InstructorCourses/InstructorCourses";

const DescriptionOfInstructor = () => {
  const [isExpanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
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
        className="flex flex-col items-start justify-start w-[500px] gap-[2em]"
      >
        <b className="font-bold">About me</b>
        <p>
          My name is Hussein and I’m a software engineer. My software journey
          started around 1998 when my uncle gave me a book titled `Learn
          Programming and Visual Basic 2.0`. That book made me realized that I
          enjoy the craft of building software. Using every medium available I
          would talk about software in a form of bulletin boards, blogs, books,
          courses, podcasts, and videos.
        </p>
        <p>
          These days I run a YouTube channel where I cover software engineering
          topics with a focus on backend tech. I discuss databases, proxies,
          security, networking, protocols, and programming. I also cover recent
          news and current events in the field of software.
        </p>
        <p>
          I specialize in the field of geographic information systems (or GIS
          for short). Since 2005, I helped many organizations in the Middle East
          implement Esri GIS by designing and building mapping apps to
          streamline their workflows. I wrote five books on Esri’s technologies
          and I've been a principal engineer there since 2015.
        </p>
        <p>
          Using software to solve interesting problems is one of the fascinating
          things I really enjoy. Feel free to contact me on my social media
          channels to ask questions or share interesting problems. I would love
          to hear it!
        </p>
      </div>
      <div
        className="py-[0.5em] rounded-[0.2em] flex gap-[1em] items-center cursor-pointer hover:bg-purpleHoverBtn w-[100px]"
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
      <div>
        <InstructorCourses />
      </div>
    </div>
  );
};

export default DescriptionOfInstructor;
