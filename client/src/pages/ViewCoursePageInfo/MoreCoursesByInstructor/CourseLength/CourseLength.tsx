import { LuDot } from "react-icons/lu";

const CourseLength = ({
  courseLevel = "All Levels",
  totalLectures = "14 lectures",
  totalMinutes = 60, // Pass total duration in minutes as a prop
}) => {
  const totalHours =
    totalMinutes >= 60
      ? `${Math.round(totalMinutes / 60)} ${
          Math.round(totalMinutes / 60) === 1 ? "hour" : "hours"
        }`
      : `total ${totalMinutes} minutes`;

  return (
    <div className="flex flex-row items-center justify-start text-[0.8em] text-[#6a6f73]">
      <p>{totalHours}</p>
      <LuDot />
      <p>{totalLectures} lectures</p>
      <LuDot />
      <p>{courseLevel}</p>
    </div>
  );
};

export default CourseLength;
