import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HotCourseCard from "./HotCourseCard/HotCourseCard";

const HotFreshCourses = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[1000px] relative">
      <h2 className="font-bold text-[1.5em] my-[0.5em]">
        Hot and Fresh Courses
      </h2>
      <div
        className="overflow-x-auto flex flex-row items-start justify-start pb-[1.5em] gap-[1em]"
        ref={carouselRef}
      >
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:brightness-125 transition duration-200"
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:brightness-125 transition duration-200"
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default HotFreshCourses;
