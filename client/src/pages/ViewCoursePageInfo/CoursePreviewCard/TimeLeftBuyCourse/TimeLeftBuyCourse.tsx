import { LuAlarmClock } from "react-icons/lu";

const TimeLeftBuyCourse: React.FC = ({ coursePrice }) => {
  return (
    <div
      className={`${
        coursePrice > 0 ? "block" : "hidden"
      } text-[#b32d0f] flex flex-row gap-[0.2em] items-center`}
    >
      <LuAlarmClock />
      <b>3 days</b>
      <p>left at this price!</p>
    </div>
  );
};

export default TimeLeftBuyCourse;
