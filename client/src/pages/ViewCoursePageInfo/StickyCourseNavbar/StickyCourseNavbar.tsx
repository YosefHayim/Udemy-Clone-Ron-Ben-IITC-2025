import React, { useState, useEffect } from "react";
import CourseRating from "../CourseRating/CourseRating";
import CourseStudentRatings from "../CourseStudentsRatings/CourseStudentRatings";

const StickyCourseNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 ${
        isVisible ? "top-[6.7%] z-[9]" : "top-[3%] z-[5] opacity-0"
      } bg-[#1c1d1f] px-[1em] py-[0.5em] text-[0.8em] w-full text-white`}
    >
      <h2 className="font-bold">
        Electronics : Semiconductor - A thorough understanding
      </h2>
      <div className="flex flex-row items-start justify-start gap-[0.5em]">
        <CourseRating />
        <CourseStudentRatings />
      </div>
    </div>
  );
};

export default StickyCourseNavbar;
