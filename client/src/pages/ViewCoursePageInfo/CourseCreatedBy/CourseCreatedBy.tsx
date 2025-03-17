import { CourseCreatedByProps } from "../../types/types";

const CourseCreatedBy: React.FC<CourseCreatedByProps> = ({
  instructorName,
  instructorId,
}) => {
  return (
    <div className="z-[10] flex flex-row items-center justify-start gap-[0.5em]">
      <p className="text-white">Created by</p>
      <span
        className="text-[#c0c4fc] underline cursor-pointer"
        id={instructorId}
      >
        {instructorName}
      </span>
    </div>
  );
};

export default CourseCreatedBy;
