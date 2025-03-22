import { CourseCreatedByProps } from "@/types/types";
import { useRef } from "react";

const CourseCreatedBy: React.FC<CourseCreatedByProps> = ({
  instructorName,
  instructorId,
  handleScroll,
}) => {
  return (
    <div className="z-[10] flex flex-row items-center justify-start gap-[0.5em]">
      <p className="text-white">Created by</p>
      <button
        onClick={handleScroll}
        className="cursor-pointer text-[#c0c4fc] underline focus:outline-none"
        id={instructorId}
      >
        {instructorName}
      </button>
    </div>
  );
};

export default CourseCreatedBy;
