import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HotCourseCard from "./HotCourseCard/HotCourseCard";

const HotFreshCourses = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -50, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 50, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-[1000px]">
      <h2 className="my-[0.5em] text-[1.5em] font-extrabold">
        Hot and Fresh Courses
      </h2>
      <div
        className="flex w-full flex-row items-center justify-center gap-[1em] overflow-x-auto pb-[1.5em]"
        ref={carouselRef}
      >
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
        <HotCourseCard />
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-[50%] -translate-y-1/2 transform rounded-full bg-white p-3 text-white shadow-carouselShadowBtn transition duration-200 hover:bg-[#e9eaf2] hover:brightness-125"
      >
        <MdKeyboardArrowLeft size={24} className="text-black" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-[50%] -translate-y-1/2 transform rounded-full bg-white p-3 text-white shadow-carouselShadowBtn transition duration-200 hover:bg-[#e9eaf2] hover:brightness-125"
      >
        <MdKeyboardArrowRight size={24} className="text-black" />
      </button>
    </div>
  );
};

export default HotFreshCourses;
