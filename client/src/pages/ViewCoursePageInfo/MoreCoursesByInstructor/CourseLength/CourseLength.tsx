import { LuDot } from "react-icons/lu";

const CourseLength: React.FC<{
  courseLevel?: string;
  totalLectures?: number;
  totalMinutes?: number;
}> = ({
  courseLevel = "All Levels",
  totalLectures = "14 lectures",
  totalMinutes = 60,
}) => {
  const totalHours =
    totalMinutes >= 60
      ? `${Math.round(totalMinutes / 60)} ${
          Math.round(totalMinutes / 60) === 1 ? "hour" : "hours"
        }`
      : `total ${totalMinutes} minutes`;

  return (
    <div className="flex flex-row items-center justify-start text-weakGray w-full">
      <p className="w-full">{totalHours}</p>
      <LuDot />
      <p className="w-full">{totalLectures} lectures</p>
      <LuDot />
      <p className="w-full">{courseLevel}</p>
    </div>
  );
};

export default CourseLength;
