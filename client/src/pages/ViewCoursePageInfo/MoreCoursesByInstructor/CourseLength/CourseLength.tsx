import { LuDot } from 'react-icons/lu';

const CourseLength: React.FC<{
  courseLevel?: string;
  totalLectures?: number;
  totalMinutes?: number;
  isSmallText?: boolean;
}> = ({
  courseLevel = 'All Levels',
  totalLectures = '14 lectures',
  totalMinutes = 60,
  isSmallText = false,
}) => {
  const totalHours =
    totalMinutes >= 60
      ? `${Math.round(totalMinutes / 60)} ${Math.round(totalMinutes / 60) === 1 ? 'hour' : 'hours'}`
      : `total ${totalMinutes} minutes`;

  return (
    <div
      className={`flex w-full  items-center justify-start text-weakGray ${isSmallText && 'text-[0.9em]'}`}
    >
      <p className="w-min-max">{totalHours}</p>
      <LuDot />
      <p className="w-min-max">{totalLectures} lectures</p>
      <LuDot />
      <p className="w-min-max">{courseLevel}</p>
    </div>
  );
};

export default CourseLength;
