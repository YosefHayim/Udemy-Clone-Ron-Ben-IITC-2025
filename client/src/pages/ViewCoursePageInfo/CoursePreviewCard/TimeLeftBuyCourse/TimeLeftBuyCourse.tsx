import { LuAlarmClock } from 'react-icons/lu';

const TimeLeftBuyCourse: React.FC<{ coursePrice: number }> = ({ coursePrice = 0 }) => {
  return (
    <div
      className={`${
        coursePrice > 0 ? 'block' : 'hidden'
      } flex  items-center gap-[0.2em] text-[#b32d0f]`}
    >
      <LuAlarmClock />
      <b>3 days</b>
      <p>left at this price!</p>
    </div>
  );
};

export default TimeLeftBuyCourse;
