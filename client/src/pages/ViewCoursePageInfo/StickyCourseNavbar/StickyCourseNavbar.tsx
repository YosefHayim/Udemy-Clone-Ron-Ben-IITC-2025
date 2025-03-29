import { useState, useEffect } from "react";
import CourseRating from "../CourseRating/CourseRating";
import CourseStudentRatings from "../CourseStudentsRatings/CourseStudentRatings";

const StickyCourseNavbar: React.FC<{
  courseName: string;
  totalStudents: number;
  avgRating: number;
  totalRatings: number;
}> = ({ courseName = "Unknown", totalStudents = 0, avgRating = 0, totalRatings = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHighPriority, setIsHighPriority] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust visibility threshold
      setIsHighPriority(scrollY > 150); // Adjust z-index threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 w-full ${isVisible ? "top-[0] opacity-100" : "top-[3%] opacity-0"} ${
        isHighPriority ? "z-[1000]" : "z-[10]"
      } w-full bg-blackUdemy px-[1em] py-[1em] text-white`}
    >
      <h2 className="font-sans font-extrabold">{courseName}</h2>
      <div className="flex w-full  items-start justify-start gap-[0.5em]">
        <CourseRating courseRating={avgRating} />
        <CourseStudentRatings totalStudents={totalStudents} totalRated={totalRatings} />
      </div>
    </div>
  );
};

export default StickyCourseNavbar;
