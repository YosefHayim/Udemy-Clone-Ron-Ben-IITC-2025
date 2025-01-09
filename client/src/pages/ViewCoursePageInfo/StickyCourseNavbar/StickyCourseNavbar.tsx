import { useState, useEffect } from "react";
import CourseRating from "../CourseRating/CourseRating";
import CourseStudentRatings from "../CourseStudentsRatings/CourseStudentRatings";

const StickyCourseNavbar = ({
  courseName,
  totalStudents,
  avgRating,
  totalRatings,
}) => {
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
        isVisible ? "top-[0] z-[1000]" : "top-[3%]  opacity-0 z-[1000]"
      } bg-[#1c1d1f] px-[1em] py-[1em]  w-full text-white z-[1000]`}
    >
      <h2 className="font-bold">{courseName}</h2>
      <div className="flex flex-row items-start justify-start gap-[0.5em]">
        <CourseRating courseRating={avgRating} />
        <CourseStudentRatings
          totalStudents={totalStudents}
          totalRated={totalRatings}
        />
      </div>
    </div>
  );
};

export default StickyCourseNavbar;
