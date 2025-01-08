import { LuDot } from "react-icons/lu";

const CourseLength = ({
  courseLevel = "All Levels",
  totalLectures = "14 lectures",
  totalHours = "1 total hour",
}) => {
  return (
    <div className="flex flex-row items-center justify-start text-[0.8em] text-[#6a6f73]">
      <p>{totalHours}</p>
      <LuDot />
      <p>{totalLectures}</p>
      <LuDot />
      <p>{courseLevel}</p>
    </div>
  );
};

export default CourseLength;
