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
    <div className="flex w-full flex-row items-center justify-start text-weakGray">
      <p className="w-min-max">{totalHours}</p>
      <LuDot />
      <p className="w-min-max">{totalLectures} lectures</p>
      <LuDot />
      <p className="w-min-max">{courseLevel}</p>
    </div>
  );
};

export default CourseLength;
